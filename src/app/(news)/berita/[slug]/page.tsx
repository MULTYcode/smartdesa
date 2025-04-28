// import { Footer } from "@/components/template/simple/layout/Footer"
// import { Header } from "@/components/template/simple/layout/Header"
// import APBDSection from "@/components/template/simple/sections/apbd-section"
// import PageContent from "@/components/template/simple/sections/page-content"
// import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
// import { CustomCard } from "@/components/ui/simple/CustomCard"
// import Image from "next/image"
// import { useContent } from "@/hooks/useContent"
// import { Calendar, Clock } from "lucide-react"
// import ShareArticle from "../share-component"
// import CommentSection from "../comment-component"

// interface PageProps {
//     params: { slug: string };
// }

// export default function Page({ params }: PageProps) {

//     const { news } = useContent();

//     const { slug } = params;

//     const berita = news.find((data) => data.id == slug);

//     return (
//         <div className="flex min-h-screen flex-col">
//             <Header />
//             <PageContent>

//                 <div className="w-full flex gap-5">

//                     <CustomCard>
//                         <div className="relative h-100">
//                             <Image src={berita?.image || "/placeholder.svg"} alt={berita?.title || ""} fill className="object-cover" />
//                         </div>
//                         <div className="p-6">
//                             <div className="flex items-center text-sm text-gray-500 mb-3">
//                                 <Calendar className="h-4 w-4 mr-1" />
//                                 <span>{berita?.date}</span>
//                                 <span className="mx-2">•</span>
//                                 <Clock className="h-4 w-4 mr-1" />
//                                 <span>{berita?.readTime}</span>
//                             </div>
//                             <h3 className="text-xl font-bold mb-2">{berita?.title}</h3>
//                             <p className="text-gray-600 mb-4 line-clamp-3">{berita?.excerpt}</p>
//                         </div>

//                         <div>
//                             <ShareArticle />
//                         </div>

//                         <div>
//                             <CommentSection />
//                         </div>

//                     </CustomCard>

//                     <div className="lg:w-1/3">
//                         <StatisticWidget />
//                     </div>

//                 </div>


//             </PageContent>

//             <APBDSection />

//             <Footer />
//         </div>
//     )
// }

import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import PageContent from "@/components/template/simple/sections/page-content"
import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
import { CustomCard } from "@/components/ui/simple/CustomCard"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import ShareArticle from "../share-component"
import CommentSection from "../comment-component"
import { notFound } from "next/navigation"
// import { news } from "@/hooks/useContent"

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ini data dummy server-side

export async function getContent() {
    return [
      {
        id: "1",
        title: "Kegiatan Gotong Royong Pembangunan Balai Banjar",
        excerpt:
          "Masyarakat Desa Lubuk Raman melaksanakan kegiatan gotong royong dalam rangka pembangunan balai banjar yang akan digunakan sebagai pusat kegiatan masyarakat...",
        date: "12 April 2023",
        readTime: "5 menit membaca",
        image: "/images/news/berita-1.jpeg?height=200&width=400&text=Berita+1",
        slug: "1",
      },
      {
        id: "2",
        title: "Pelatihan Kerajinan Tangan untuk Ibu-Ibu PKK",
        excerpt:
          "Desa Lubuk Raman mengadakan pelatihan kerajinan tangan untuk meningkatkan keterampilan dan ekonomi kreatif bagi ibu-ibu PKK di balai desa...",
        date: "5 April 2023",
        readTime: "4 menit membaca",
        image: "/images/news/berita-2.jpeg?height=200&width=400&text=Berita+2",
        slug: "2",
      },
      {
        id: "3",
        title: "Penyuluhan Kesehatan dan Vaksinasi Gratis",
        excerpt:
          "Bekerjasama dengan Puskesmas setempat, Desa Lubuk Raman mengadakan kegiatan penyuluhan kesehatan dan vaksinasi gratis untuk seluruh warga...",
        date: "28 Maret 2023",
        readTime: "3 menit membaca",
        image: "/images/news/berita-3.jpeg?height=200&width=400&text=Berita+3",
        slug: "3",
      },
    ];
  }
  

export default async function Page({ params }: PageProps) {

  const { slug } = await params; // <= ini yang baru

  const news = await getContent(); // fetch dari server function
  const berita = news.find((data) => data.id == slug);

  if (!berita) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>
        <div className="w-full flex gap-5">
          <CustomCard>
            <div className="relative h-100">
              <Image
                src={berita?.image || "/placeholder.svg"}
                alt={berita?.title || ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{berita?.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{berita?.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{berita?.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{berita?.excerpt}</p>
            </div>

            <div>
              <ShareArticle />
            </div>

            <div>
              <CommentSection />
            </div>
          </CustomCard>

          <div className="lg:w-1/3">
            <StatisticWidget />
          </div>
        </div>
      </PageContent>

      <APBDSection />
      <Footer />
    </div>
  )
}
