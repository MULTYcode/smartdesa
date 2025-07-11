import Link from "next/link"
import { NewsCard } from "@/components/common/news-card"
import { ChevronRight } from "lucide-react"
import useArticle from "@/features/article/hooks/useArticle";
import { useContent } from "@/hooks/useContent";

export function NewsSection() {
  const { data } = useArticle({ "page_size": 6 });
  const { article } = useContent();
  

  return (
    data && data?.pages[0]?.data?.length > 0 ?
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

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8">
            {data?.pages[0].data.slice(0, 6).map((item) => (
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
      </section> : <section id="article" className="py-16 bg-gray-50">
        <div className="px-6 sm:px-12  animate-pulse">
          {/* Heading skeleton */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="h-8 w-48 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* NewsCard grid skeleton */}
          <div className="grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
