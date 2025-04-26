'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    // const [pdfWidth, setPdfWidth] = useState<number>(600);
    const containerRef = useRef<HTMLDivElement>(null);

    const [scale, setScale] = useState(1.3);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(() => {            
            // const width = containerRef.current?.offsetWidth ?? 600;
            // setPdfWidth(width);
        });

        observer.observe(containerRef.current);
        // setPdfWidth(containerRef.current.offsetWidth);

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
        setScale(1.3);
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

            <div className="flex justify-center gap-4 mt-2 mb-3">
                {/* Zoom out */}
                {/* <button
                    onClick={() => setScale((prev) => Math.max(0.5, prev - 0.2))}
                    className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
                >
                    Zoom -
                </button> */}

                {/* Zoom in */}
                {/* <button
                    onClick={() => setScale((prev) => Math.min(3, prev + 0.2))}
                    className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
                >
                    Zoom +
                </button> */}

                {/* Download PDF */}
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
            <div
                ref={containerRef}
                className="relative bg-grey shadow-lg rounded-xl overflow-hidden p-4 w-full"
            >
                <Document
                    file={fileItems[currentIndex].file}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={<p className="text-center py-10">Memuat dokumen...</p>}
                    error={<p className="text-center py-10 text-red-500">Gagal memuat PDF</p>}
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            // width={pdfWidth}
                            scale={scale}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="mb-4 mx-auto"                            
                        />
                    ))}
                </Document>

                {numPages && numPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-600">
                        <button
                            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                            disabled={pageNumber <= 1}
                            className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                        >
                            Halaman Sebelumnya
                        </button>

                        <span>
                            Halaman {pageNumber} dari {numPages}
                        </span>

                        <button
                            onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
                            disabled={pageNumber >= numPages}
                            className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                        >
                            Halaman Selanjutnya
                        </button>
                    </div>
                )}
                {/* <Document
          file={fileItems[currentIndex].file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="text-center py-10">Memuat dokumen...</p>}
          error={<p className="text-center py-10 text-red-500">Gagal memuat PDF</p>}
        >
          <Page
            pageNumber={1}
            width={pdfWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document> */}
            </div>
        </div>
    );
}


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // Pastikan worker src sesuai
// pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js';

// type CarouselPDFViewerProps = {
//   fileItems: {
//     title: string;
//     file: string;
//   }[];
// };

// export default function CarouselPDFViewer({ fileItems }: CarouselPDFViewerProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [pdfWidth, setPdfWidth] = useState<number>(600);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Responsive width tracking
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new ResizeObserver(() => {
//       if (containerRef.current) {
//         const width = containerRef.current.offsetWidth;
//         setPdfWidth(width);
//       }
//     });

//     observer.observe(containerRef.current);
//     setPdfWidth(containerRef.current.offsetWidth);

//     return () => observer.disconnect();
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="w-full max-w-screen-lg mx-auto p-4">
//       <div
//         ref={containerRef}
//         className="relative bg-white shadow-lg rounded-xl overflow-hidden p-4"
//       >
//         <h2 className="text-base text-xl font-semibold text-center mb-4">
//           {fileItems[currentIndex].title}
//         </h2>

//         <Document
//           file={fileItems[currentIndex].file}
//           onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//           loading={<p className="text-center py-10">Memuat dokumen...</p>}
//           error={<p className="text-center py-10 text-red-500">Gagal memuat PDF</p>}
//         >
//           <Page
//             pageNumber={1}
//             width={pdfWidth}
//             renderTextLayer={false}
//             renderAnnotationLayer={false}
//           />
//         </Document>

//         {/* Tombol navigasi kiri & kanan */}
//         <div className="absolute inset-0 flex items-center justify-between px-2">
//           <button
//             onClick={handlePrev}
//             className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-200"
//             aria-label="Sebelumnya"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <button
//             onClick={handleNext}
//             className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-200"
//             aria-label="Selanjutnya"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       <div className="mt-2 text-center text-sm text-gray-600">
//         Dokumen {currentIndex + 1} dari {fileItems.length}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // Pastikan worker src sesuai (pakai yang kamu sudah copy tadi)
// pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js';

// type CarouselPDFViewerProps = {
//     fileItems: {
//         title: string;
//         file: string;
//     }[];
// };

// export default function CarouselPDFViewer({ fileItems }: CarouselPDFViewerProps) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [numPages, setNumPages] = useState<number | null>(null);
//     const [pdfWidth, setPdfWidth] = useState<number>(600);
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Auto resize with container
//     useEffect(() => {
//         if (!containerRef.current) return;

//         const observer = new ResizeObserver(() => {
//             if (containerRef.current) {
//                 const width = containerRef.current.offsetWidth;
//                 setPdfWidth(width);
//             }
//         });

//         observer.observe(containerRef.current);

//         // Initial set
//         setPdfWidth(containerRef.current.offsetWidth);

//         return () => observer.disconnect();
//     }, []);

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <div className="w-full max-w-screen-lg mx-auto p-4">
//             <div
//                 ref={containerRef}
//                 className="relative bg-white shadow-lg rounded-xl overflow-hidden"
//             >
//                 <h1 className="text-sm font-semibold text-center">
//                     {fileItems[currentIndex].title}
//                 </h1>
//                 <Document
//                     file={fileItems[currentIndex].file}
//                     onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//                     loading={<p className="text-center py-10">Memuat dokumen...</p>}
//                     error={<p className="text-center py-10 text-red-500">Gagal memuat PDF</p>}
//                 >
//                     <Page
//                         pageNumber={1}
//                         width={pdfWidth}
//                         renderTextLayer={false}
//                         renderAnnotationLayer={false}
//                     />
//                 </Document>

//                 {/* Navigasi kiri-kanan */}
//                 <div className="absolute inset-0 flex items-center justify-between px-4">
//                     <button
//                         onClick={handlePrev}
//                         className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//                     >
//                         ←
//                     </button>
//                     <button
//                         onClick={handleNext}
//                         className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//                     >
//                         →
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-2 text-center text-sm text-gray-600">
//                 Dokumen {currentIndex + 1} dari {fileItems.length}
//             </div>
//         </div>
//     );
// }
