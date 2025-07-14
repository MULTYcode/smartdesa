/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { NewsCard } from '@/components/common/news-card'
import useArticle from '@/features/article/hooks/useArticle';
import React, { useEffect, useRef } from 'react'

export default function PageArticle() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useArticle({ "page_size": 8 });
  const articleImportData = data?.pages.flatMap(
    (page: any) => page?.data
  );
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
     <div className="px-6 sm:px-12 flex justify-between items-center mb-10 mt-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
          { 
            (!isLoading) && (!articleImportData || articleImportData.length === 0) ? <div className="h-36 col-span-1 md:col-span-4 xl:col-span-4 w-full flex items-center justify-center"><p className="text-center">Tidak ada artikel</p></div> :
            (articleImportData ?? []).map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.published_at ?? Date.now().toString()}
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
  )
}