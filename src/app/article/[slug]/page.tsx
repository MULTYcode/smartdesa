import React from 'react'
import type { Metadata } from "next"
import ArticleService from '@/features/article/services/article.service';
import { ArticleType } from '@/features/article/types/article.type';
import { formatMetadata } from '@/lib/generate-seo';

interface DynamicPageProps {
  params: { slug?: string };
}

let article: ArticleType;

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params || {};
  try {
    const articleResponse = await ArticleService.getOne(slug ?? '', { with: "user,category" })
     article = articleResponse.data

    return formatMetadata({ ...article, type: "article" }, { siteName: "Website Desa" })
  } catch {
    return {
      title: "Artikel | Website Desa",
      description: "Baca artikel terbaru kami",
    }
  }
}

export default function page() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            
          </div>
        </div>
      </div>
    </section>
  )
}