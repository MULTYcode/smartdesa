"use client"

import React from 'react'
import { NewsCard } from '@/components/common/news-card';
import ArtikelIklan from './artikelIklan';
import ArtikelPopuler from './artikelPopuler';
import { ArticleType } from '../types/article.type';

interface ArticleDetailProps {
    slug: string;
    article: ArticleType;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug, article }) => {
    return (        
        <div className="px-6 sm:px-12 py-8 max-w-8xl">
            <div className='box-border grid grid-cols-12 gap-5 justify-between'>
                <div className='w-full col-span-12 lg:col-span-9'>
                    <NewsCard
                        key={article?.id}
                        id={article?.id}
                        title={slug ?? "Artikel Tidak Ditemukan"}
                        // excerpt={item.excerpt}
                        date={article?.published_at ?? ""}
                        readTime={article?.views?.toString() ?? "0"}
                        image={article?.thumbnail ?? "/images/placeholder.svg"}
                        slug={article?.slug}
                        isDetail={true}
                        content={article?.content || ''}
                        category={article?.category?.name || 'Umum'}
                        author={article?.user?.name || 'Admin'}
                    />
                </div>
                <div className='flex flex-col col-span-12 lg:col-span-3 gap-6 w-full'>    
                    <ArtikelPopuler />
                    <ArtikelIklan />
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;