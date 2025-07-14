"use client"

import { TourCard } from "@/components/common/tour-card";
import useTour from "@/features/tour/hooks/useList";
import { useEffect, useRef } from "react";

export default function TourPage() {   
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); 
    const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage  } = useTour({ "search": '', 'page_size': 6 });
    const allTour = data?.pages?.flatMap(page => page?.data) || [];
    useEffect(() => {
        const handleScroll = () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
    
          timeoutRef.current = setTimeout(() => {
            if (
              !isLoading &&
              hasNextPage &&
              window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 600
            ) {
              fetchNextPage();
            }
          }, 200);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isLoading, hasNextPage, fetchNextPage]);

    return (
        <section className="py-16 bg-gray-50">
            <div className="px-6 sm:px-12 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        (!isLoading) && (!allTour || allTour.length === 0) ? <div className="h-36 col-span-1 md:col-span-4 xl:col-span-4 w-full flex items-center justify-center"><p className="text-center">Tidak ada wisata</p></div> :
                        allTour.map((item) => (
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
                    {(isLoading || isFetchingNextPage) && (
                            <div className="w-full col-span-1 md:col-span-4 xl:col-span-4 flex justify-center items-center my-12">
                            <div className="flex items-center space-x-3">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                                <span className="text-gray-600 font-medium">Loading...</span>
                            </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
