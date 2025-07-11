"use client"
import { NewsCard } from '@/components/common/news-card'
import PageArticleSkeleton from '@/components/common/skeleton/PageArticleSkeleton';
import useArticle from '@/features/article/hooks/useArticle';
import React from 'react'

export default function PageArticle() {
  const { data, isLoading } = useArticle({ "page_size": 6 });

  if (isLoading) return <PageArticleSkeleton />;
  if (data?.pages[0].data.length === 0) return <div className="h-full w-full flex items-center justify-center"><p className="text-center">Tidak ada data</p></div>;

  return (
    // <body className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="px-6 sm:px-12  flex justify-between items-center mb-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.pages[0].data.map((item) => (
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
    // </body>
  )
}