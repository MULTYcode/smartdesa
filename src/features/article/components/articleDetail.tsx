"use client"

import React from 'react'
import useArticleDetail from '../hooks/useDetail'
import { NewsCard } from '@/components/template/simple/sections/news-card';
import ArtikelIklan from './artikelIklan';
import ArtikelPopuler from './artikelPopuler';

interface ArticleDetailProps {
    slug: string;
}

export default function ArticleDetail({ slug }: ArticleDetailProps) {

    const { data } = useArticleDetail({ with: "user,category" }, slug);

    return (
        <div className="container mx-auto px-4 py-8 max-w-8xl">
            <div className='box-border flex flex-wrap gap-5 justify-between'>
                <div className='w-full md:w-1/5 lg:w-3/5'>
                    <NewsCard
                        key={data?.id}
                        id={data?.id}
                        title={data?.title ?? "Artikel Tidak Ditemukan"}
                        // excerpt={item.excerpt}
                        date={data?.published_at ?? ""}
                        readTime={data?.views?.toString() ?? "0"}
                        image={data?.thumbnail ?? "/images/placeholder.svg"}
                        slug={data?.slug}
                        isDetail={true}
                        content={data?.content || ''}
                        category={data?.category?.name || 'Umum'}
                        author={data?.user?.name || 'Admin'}
                    />
                </div>

                <ArtikelPopuler />

                <ArtikelIklan />

            </div>
        </div>
    )
}