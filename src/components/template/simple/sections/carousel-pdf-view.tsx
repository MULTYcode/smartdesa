// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // Worker PDF.js
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
//   const [containerWidth, setContainerWidth] = useState(600);
//   const [scale, setScale] = useState(1.0);
//   const [loading, setLoading] = useState(true);

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new ResizeObserver(() => {
//       const width = containerRef.current?.offsetWidth ?? 600;
//       setContainerWidth(width);
//     });

//     observer.observe(containerRef.current);
//     setContainerWidth(containerRef.current.offsetWidth);

//     return () => observer.disconnect();
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     setLoading(true);
//     setScale(1.0);
//     setNumPages(null);
//   }, [currentIndex]);

//   return (
//     <div className="w-full max-w-screen-lg mx-auto p-4">
//       {/* Header */}
//       <div className="mb-4 text-center">
//         <h1 className="text-base font-semibold mb-2">{fileItems[currentIndex].title}</h1>
//         <div className="flex items-center justify-center gap-4">
//           <button
//             onClick={handlePrev}
//             className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition"
//             aria-label="Sebelumnya"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <span className="text-sm text-gray-600">
//             Dokumen {currentIndex + 1} dari {fileItems.length}
//           </span>

//           <button
//             onClick={handleNext}
//             className="bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition"
//             aria-label="Selanjutnya"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Zoom & Download */}
//       <div className="flex justify-center gap-4 mt-2 mb-3">
//         <button
//           onClick={() => setScale((prev) => Math.max(0.5, prev - 0.2))}
//           className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
//         >
//           Zoom -
//         </button>

//         <button
//           onClick={() => setScale((prev) => Math.min(3, prev + 0.2))}
//           className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
//         >
//           Zoom +
//         </button>

//         <a
//           href={fileItems[currentIndex].file}
//           download
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
//         >
//           Download
//         </a>
//       </div>

//       {/* PDF Viewer Scrollable */}
//       <div
//         ref={containerRef}
//         className="relative bg-gray-100 shadow-lg rounded-xl overflow-hidden w-full"
//       >
//         <div className="overflow-y-auto h-[70vh] p-4">
//           <Document
//             file={fileItems[currentIndex].file}
//             onLoadSuccess={({ numPages }) => {
//               setNumPages(numPages);
//               setLoading(false);
//             }}
//             loading={null}
//             error={<p className="text-center py-10 text-red-500">Gagal memuat dokumen</p>}
//           >
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-10">
//                 <Loader2 className="animate-spin w-8 h-8 text-blue-600 mb-2" />
//                 <p className="text-sm text-gray-600">Memuat dokumen...</p>
//               </div>
//             ) : (
//               Array.from(new Array(numPages), (_, index) => (
//                 <Page
//                   key={`page_${index + 1}`}
//                   pageNumber={index + 1}
//                   width={containerWidth > 768 ? Math.min(containerWidth * 0.8, 800) : containerWidth - 32}
//                   scale={scale}
//                   renderTextLayer={false}
//                   renderAnnotationLayer={false}
//                   className="mb-6 mx-auto"
//                 />
//               ))
//             )}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useRef, useState, memo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Worker PDF.js
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
      width={width}
      renderTextLayer={false}
      renderAnnotationLayer={false}
      className="mb-6 mx-auto"
    />
  ),
  (prevProps, nextProps) => {
    // Hanya re-render jika pageNumber atau scale berubah
    return prevProps.pageNumber === nextProps.pageNumber && prevProps.scale === nextProps.scale && prevProps.width === nextProps.width;
  }
);

// Menambahkan displayName
MemoizedPage.displayName = 'MemoizedPage';

export default function CarouselPDFViewer({ fileItems }: CarouselPDFViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fileItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === fileItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setLoading(true);
    setScale(1.0);  // Reset scale when switching files
    setNumPages(null);
  }, [currentIndex]);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  // useEffect untuk menangani efek zoom
  useEffect(() => {
    if (scale !== 1.0) {
      // Set efek lainnya yang berkaitan dengan zoom
      console.log('Zoom effect applied: ', scale);
    }
  }, [scale]); // Akan dipanggil setiap kali nilai scale berubah

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
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
        {/* <button
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
        </button> */}

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

      {/* PDF Viewer Scrollable */}
      <div
        ref={containerRef}
        className="relative bg-gray-100 shadow-lg rounded-xl overflow-hidden w-full"
      >
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
              numPages && 
              Array.from(new Array(numPages), (_, index) => (
                <MemoizedPage
                  key={index}
                  pageNumber={index + 1}
                  scale={scale} // Zoom hanya diterapkan di sini
                  width={containerWidth > 768 ? Math.min(containerWidth * 0.8, 800) : containerWidth - 32}
                />
              ))
            )}
          </Document>
        </div>
      </div>
    </div>
  );
}
