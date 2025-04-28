'use client';

import { useEffect, useState, memo, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useContent } from '@/hooks/useContent';

pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js';

type CarouselPDFViewerProps = {
    fileItems: {
        title: string;
        file: string;
    }[];
};

const MemoizedPage = memo(
    ({ pageNumber, scale, width }: { pageNumber: number; scale: number; width: number }) => (
        <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width}
            className="mb-6 mx-auto w-full h-auto"
        />
    ),
    (prevProps, nextProps) => prevProps.pageNumber === nextProps.pageNumber && prevProps.scale === nextProps.scale
);

MemoizedPage.displayName = 'MemoizedPage';

export default function CarouselPDFViewer({ fileItems }: CarouselPDFViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [scale, setScale] = useState(1.0);
    const [loading, setLoading] = useState(true);
    const [containerWidth, setContainerWidth] = useState(600);

    const containerRef = useRef<HTMLDivElement>(null);

    const { metaDataPDF } = useContent();

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver(() => {
            const width = containerRef.current?.offsetWidth ?? 600;
            setContainerWidth(width);
        });

        observer.observe(containerRef.current);
        setContainerWidth(containerRef.current.offsetWidth);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setLoading(true);
        setScale(1.0); // Reset zoom saat ganti file
        setNumPages(null);
    }, [currentIndex]);

    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    return (
        <>
            <div className="w-full max-w-4xl mx-auto p-4">
                {/* Header */}
                <div className="mb-4 text-center">
                    <h1 className="text-base font-semibold mb-2">{fileItems[currentIndex].title}</h1>
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition"
                            aria-label="Sebelumnya"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <span className="text-sm text-gray-600">
                            Dokumen {currentIndex + 1} dari {fileItems.length}
                        </span>

                        <button
                            onClick={handleNext}
                            className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition"
                            aria-label="Selanjutnya"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Zoom & Download */}
                <div className="flex justify-center gap-4 mt-2 mb-3">
                    <button
                        onClick={() => setScale((prev) => Math.max(0.5, prev - 0.2))}
                        className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
                    >
                        Zoom -
                    </button>

                    <button
                        onClick={() => setScale((prev) => Math.min(3, prev + 0.2))}
                        className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
                    >
                        Zoom +
                    </button>

                    <a
                        href={fileItems[currentIndex].file}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                    >
                        Download
                    </a>
                </div>

                {/* PDF Viewer */}
                <div ref={containerRef} className="relative bg-gray-200 shadow-lg rounded-xl overflow-hidden w-full max-w-full min-h-[500px] sm:max-w-3xl mx-auto">
                    <div className="overflow-y-auto h-[70vh] p-4">

                        <Document
                            file={fileItems[currentIndex].file}
                            onLoadSuccess={onLoadSuccess}
                            loading={null}
                            error={<p className="text-center py-10 text-red-500">Gagal memuat dokumen</p>}
                        >
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-10">
                                    <Loader2 className="animate-spin w-8 h-8 text-blue-600 mb-2" />
                                    <p className="text-sm text-gray-600">Memuat dokumen...</p>
                                </div>
                            ) : (
                                numPages && (
                                    <div className="flex flex-col items-center gap-6">
                                        {Array.from({ length: numPages }, (_, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    transform: `scale(${scale})`,
                                                    transformOrigin: 'top center',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            >
                                                <MemoizedPage
                                                    pageNumber={index + 1}
                                                    scale={1} // <-- Tetap 1 (jangan scale di komponen Page)
                                                    width={containerWidth > 768 ? Math.min(containerWidth * 0.8, 800) : containerWidth - 32}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )
                            )}
                        </Document>
                    </div>

                </div>

                {/* Meta Data */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl shadow-md">
                    <h2 className="font-semibold text-lg mb-4">Meta Data</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-sm text-gray-600">
                        {Object.entries(metaDataPDF).map(([key, value]) => (
                            <div key={key} className="flex gap-4">
                                <span className="font-medium capitalize text-left w-1/3">
                                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                </span>
                                <span className="text-left w-2/3">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}