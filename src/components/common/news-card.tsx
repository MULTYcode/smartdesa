import { Calendar, ChevronRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CustomCard } from "@/components/ui/simple/CustomCard"
import RichTextContent from "@/components/common/RichTextContent"

export interface NewsCardProps {
  id?: number
  title: string
  excerpt?: string
  date: string
  readTime?: string
  image?: string
  slug?: string
  className?: string
  isDetail?: boolean
  content?: string
  category?: string
  showCategory?: boolean
  author?: string
}

export function NewsCard({ title, excerpt, date, readTime, image, slug, className, content, category, author, showCategory = false, isDetail = false }: NewsCardProps) {
  return (
    <CustomCard className={cn("overflow-hidden", className)}>
      <div className={`relative ${isDetail ? 'h-90' : 'h-48'}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className='object cover'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {
          isDetail ? <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <Eye className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
            <span className="mx-2">•</span>
            <span>{category}</span>
          </div> : showCategory && <span className="font-semibold text-red-500 text-xs">[{category}]</span>
        }
        <h3 className={`font-bold mb-2 transition-colors ${!isDetail ? 'hover:text-[#0d6b3f]' : ''
          }`}>
          {
            !isDetail ? <Link href={`/article/${slug}`}>{title}</Link>
              : title
          }
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        {
          !isDetail ? <Link href={`/article/${slug}`} className="text-[#0d6b3f] font-medium flex items-center hover:underline">
            Baca Selengkapnya
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link> : <RichTextContent content={content || ''} />
        }

        {
          isDetail && <p className="self-start align-baseline text-base font-semibold text-black my-5">({author})</p>
        }
      </div>
    </CustomCard>
  )
}
