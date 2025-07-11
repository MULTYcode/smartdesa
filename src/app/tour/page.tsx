"use client"
import TourPageSkeleton from "@/components/common/skeleton/TourPageSkeleton";
import { TourCard } from "@/components/common/tour-card";
import useTour from "@/features/tour/hooks/useList";

export default function TourPage() {    
    const { data, isLoading } = useTour({ "search": '', 'page_size': 6 });
    const allTour = data?.pages?.flatMap(page => page?.data) || [];

    if (isLoading) return <TourPageSkeleton />;
    
    if (allTour.length === 0) return <div className="h-full w-full flex items-center justify-center"><p className="text-center">Tidak ada data</p></div>;

    return (
        <section className="py-16 bg-gray-50">
            <div className="px-6 sm:px-12 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {allTour.map((item) => (
                        <TourCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            // excerpt={item.excerpt}
                            date={item.published_at ?? Date.now().toString()}
                            // readTime={item.readTime}
                            image={item.thumbnail ?? "/images/placeholder.svg"}
                            slug={item.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
