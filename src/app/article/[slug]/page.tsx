import { formatMetadata } from '@/lib/generate-seo'
import ArticleDetail from '@/features/article/components/articleDetail'
import { getArticle } from '@/features/article/libs/getArticle';
import { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps ): Promise<Metadata> {
  const { slug } = params;
  try {
    const article = await getArticle(slug);
    return formatMetadata({ ...article, type: "article" }, { siteName: "Website Desa" });
  } catch {
    return {
      title: "Artikel | Website Desa",
      description: "Baca artikel terbaru kami",
    };
  }
}

export default async function Page({ params }: PageProps ) {
  const { slug } = params;
  const article = await getArticle(slug);
  return <ArticleDetail slug={slug} article={article} />;
}