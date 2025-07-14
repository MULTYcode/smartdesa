import Link from "next/link"
import { NewsCard } from "@/components/common/news-card"
import { ChevronRight } from "lucide-react"
import useArticle from "@/features/article/hooks/useArticle";
import { useContent } from "@/hooks/useContent";
import PageArticleSkeleton from "@/components/common/skeleton/PageArticleSkeleton";

export function NewsSection() {
  const { data, isLoading } = useArticle({ "page_size": 8 });
  const { article } = useContent();
  
  return (
      <section id="article" className="py-16 bg-gray-50">
        <div className="px-6 sm:px-12 ">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h2>
            </div>
            <Link href="/article" className="text-[#0d6b3f] font-medium flex items-center hover:underline">
              Lihat Semua
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {
              isLoading ?   <PageArticleSkeleton /> :
              data?.pages[0].data.length === 0 ? <div className="h-36 w-full col-span-1 md:col-span-3 xl:col-span-4  flex items-center justify-center"><p className="text-center">Tidak ada artikel</p></div> :
              data?.pages[0].data.slice(0, 6).map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                // excerpt={item.excerpt}
                date={item.published_at ?? Date.now().toString()}
                // readTime={item.readTime}
                image={item.thumbnail ?? "/images/placeholder.svg"}
                slug={item.slug}
                category={item.category?.name}
                showCategory={true}
              />
            ))}
          </div>
        </div>
      </section> 
  )
}
