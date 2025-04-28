'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js';

type CarouselPDFViewerProps = {
    fileItems: {
        title: string;
        file: string;
    }[];
};

export default function CarouselPDFViewer({ fileItems }: CarouselPDFViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pdfWidth, setPdfWidth] = useState<number>(600);
    const containerRef = useRef<HTMLDivElement>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(() => {
            const width = containerRef.current?.offsetWidth ?? 600;
            setPdfWidth(width);
        });

        observer.observe(containerRef.current);
        setPdfWidth(containerRef.current.offsetWidth);

        return () => observer.disconnect();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        setPageNumber(1);
        setLoading(true);
    }, [currentIndex]);

    return (
        <div className="w-full max-w-screen-lg mx-auto p-4">
            {/* Bagian Atas: Judul & Navigasi */}
            <div className="mb-4 text-center">
                <h1 className="text-base font-semibold mb-2">
                    {fileItems[currentIndex].title}
                </h1>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition"
                        aria-label="Sebelumnya"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-xs md:text-sm text-gray-600">
                        Dokumen {currentIndex + 1} dari {fileItems.length}
                    </span>

                    <button
                        onClick={handleNext}
                        className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition"
                        aria-label="Selanjutnya"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Zoom dan Download */}
            <div className="flex justify-center gap-2 mt-2 mb-4 flex-wrap">
                <a
                    href={fileItems[currentIndex].file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs md:text-sm"
                >
                    Download PDF
                </a>
            </div>

            {/* PDF Viewer */}
            <div
                ref={containerRef}
                className="relative bg-gray-50 shadow-lg rounded-xl overflow-hidden p-4 w-full max-h-[80vh] overflow-y-auto"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Document
                            file={fileItems[currentIndex].file}
                            onLoadSuccess={({ numPages }) => {
                                setNumPages(numPages);
                                setLoading(false);
                            }}
                            loading={
                                <div className="flex justify-center py-10">
                                    <Loader2 className="animate-spin w-6 h-6 text-blue-600" />
                                </div>
                            }
                            error={<p className="text-center py-10 text-red-500">Gagal memuat PDF</p>}
                        >
                            {loading ? null : (
                                Array.from(new Array(numPages), (_, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={pdfWidth}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        className="mb-4 mx-auto"
                                    />
                                ))
                            )}
                        </Document>
                    </motion.div>
                </AnimatePresence>

                {/* Navigasi Halaman PDF */}
                {numPages && numPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-4 text-xs md:text-sm text-gray-600 flex-wrap">
                        <button
                            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                            disabled={pageNumber <= 1}
                            className="px-2 md:px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                        >
                            Halaman Sebelumnya
                        </button>

                        <span>
                            Halaman {pageNumber} dari {numPages}
                        </span>

                        <button
                            onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
                            disabled={pageNumber >= numPages}
                            className="px-2 md:px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                        >
                            Halaman Selanjutnya
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
