import Link from "next/link"
import { NewsCard } from "@/components/public/sections/news-card"
import { ChevronRight } from "lucide-react"
import type { NewsItem } from "@/types/Simple"

interface NewsSectionProps {
  news: NewsItem[]
}

export function NewsSection({ news }: NewsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
            <p className="text-gray-600">Informasi dan berita terkini dari Desa Peninjoan</p>
          </div>
          <Link href="/berita" className="text-[#0d6b3f] font-medium flex items-center hover:underline">
            Lihat Semua
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              readTime={item.readTime}
              image={item.image}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
