"use client"
import React from 'react'
import Image from 'next/image'
import useArticle from '../hooks/useArticle'
import Link from 'next/link'
import ArticlePopulerSkeleton from '@/components/common/skeleton/ArticlePopulerSkeleton'
import { formatDate, truncateWords } from '@/lib/utils'

export default function ArtikelPopuler() {
    const { data, isLoading } = useArticle({ "page_size": 5, 'order': 'desc', 'by': 'views' });

    if (isLoading) return <ArticlePopulerSkeleton />;

    return (
        <div className='w-full'>
            <h2 className='text-lg uppercase font-bold mb-4'>Berita Populer</h2>
            <ul className='space-y-4'>
                {data?.pages[0].data.map((item) => {
                    const rawCategory = item.category?.name || "Berita";
                    const categoryText = truncateWords(rawCategory, 2);

                    return (
                        <Link key={item.id} href={`/article/${item.slug}`}>
                            <li className="flex gap-4 my-4 group">
                                <div className="relative flex-shrink-0 w-24 h-20 md:w-28 md:h-16 overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        src={item.thumbnail || "/images/placeholder.svg"}
                                        alt={item.title}
                                        width={120}
                                        height={80}
                                    />
                                </div>
                                <div className="flex flex-col justify-between flex-grow min-w-0">
                                    <h5 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-green-700 transition-colors leading-snug">
                                        {item.title}
                                    </h5>
                                    <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-2 gap-y-1 mt-2 min-w-0">
                                        <span className="font-semibold text-red-500 text-xs shrink-0" title={rawCategory}>
                                            {categoryText}
                                        </span>
                                        <span className="text-gray-300 select-none">•</span>
                                        <span className="text-gray-400 text-xs shrink-0">{formatDate(item.published_at || item.created_at)}</span>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}