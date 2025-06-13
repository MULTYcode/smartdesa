export default function PageArticleSkeleton() {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center mb-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full animate-pulse space-y-2">
            {/* Thumbnail */}
            <div className="w-full h-48 bg-gray-300 rounded-lg" />

            {/* Title */}
            <div className="h-5 bg-gray-200 rounded w-3/4" />

            {/* Date */}
            <div className="h-3 bg-gray-100 rounded w-1/2" />

            {/* Optional excerpt */}
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}
