"use client"
import { NewsCard } from "@/components/common/news-card"
import useTour from "@/features/tour/hooks/useList";

export default function TourPage() {    
    const { data } = useTour({ "search": '', 'page_size': 6 });
    const allTour = data?.pages?.flatMap(page => page?.data) || [];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {allTour.map((item) => (
                        <NewsCard
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
