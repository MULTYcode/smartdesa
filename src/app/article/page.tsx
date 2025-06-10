"use client"
import { NewsCard } from '@/components/template/simple/sections/news-card'
import useArticle from '@/features/article/hooks/useArticle';
import React from 'react'

export default function PageTour() {
  const { data } = useArticle({ "page_size": 6 });
  return (
    // <body className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center mb-10 mt-10">
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