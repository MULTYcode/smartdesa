import React from 'react'
import type { Metadata } from "next"
import ArticleService from '@/features/article/services/article.service';
import { ArticleType } from '@/features/article/types/article.type';
import { formatMetadata } from '@/lib/generate-seo';
import ArticleDetail from '@/features/article/components/articleDetail';

interface PageProps {
  params: { slug: string };
}

let article: ArticleType;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = await params
  try {
    const articleResponse = await ArticleService.getOne(slug ?? '', { with: "user,category" })
    article = await articleResponse.data

    return formatMetadata({ ...article, type: "article" }, { siteName: "Website Desa" })
  } catch {
    return {
      title: "Artikel | Website Desa",
      description: "Baca artikel terbaru kami",
    }
  }
}

// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const slug = params.slug;

//   // Lakukan fetch data artikel berdasarkan slug
//   const res = await ArticleService.getOne(slug ?? '', { with: "user,category" })
//   const article = await res.data

//   return {
//     title: article.title,
//     description: article.excerpt,
//   };
// }

export default async function page({ params }: PageProps) {
  const { slug } = await params
  return <ArticleDetail slug={slug} />
}