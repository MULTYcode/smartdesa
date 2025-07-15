/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { NewsCard } from '@/components/common/news-card'
import useArticle from '@/features/article/hooks/useArticle';
import React, { useEffect, useRef, useState } from 'react'

export default function PageArticle() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useArticle({ "page_size": 8 , "search": searchValue});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
  };
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
     <div className="px-6 sm:px-12 flex justify-between flex-col items-center mb-10 mt-10">
       <div className="w-full flex justify-between items-center mb-12">
          <div className="relative w-full col-span-6">
              <input id="search-dropdown" type='search' value={searchValue} onChange={handleChange} className="block py-3 px-5 pe-12 w-full rounded-sm text-sm text-gray-900 bg-gray-100 placeholder:text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Cari artikel ..." />
              <span className="absolute top-0 end-0 py-3 px-5 sm:ms-4 text-sm font-medium h-full text-white focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
          { 
            (!isLoading) && (!articleImportData || articleImportData.length === 0) ? <div className="h-36 col-span-1 md:col-span-4 xl:col-span-4 w-full flex items-center justify-center"><p className="text-center">Tidak ada artikel</p></div> :
            (articleImportData ?? []).map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                category={item.category?.name}
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