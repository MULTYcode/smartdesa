import { Calendar, ChevronRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CustomCard } from "@/components/ui/simple/CustomCard"

export interface NewsCardProps {
  id?: string
  title: string
  excerpt?: string
  date: string
  readTime: string
  image?: string
  slug?: string
  className?: string
}

export function NewsCard({ title, excerpt, date, readTime, image, slug, className }: NewsCardProps) {
  return (
    <CustomCard className={cn("overflow-hidden", className)}>
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-[#0d6b3f] transition-colors">
          <Link href={`/berita/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link href={`/berita/${slug}`} className="text-[#0d6b3f] font-medium flex items-center hover:underline">
          Baca Selengkapnya
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </CustomCard>
  )
}
