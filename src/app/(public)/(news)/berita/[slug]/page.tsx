import { Footer } from "@/components/public/layout/Footer";
import { Header } from "@/components/public/layout/Header";
import APBDSection from "@/components/public/simple/sections/apbd-section";
import PageContent from "@/components/public/simple/sections/page-content";
import StatisticWidget from "@/components/public/simple/sections/statistic-widget";
import { CustomCard } from "@/components/ui/simple/CustomCard";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import ShareArticle from "../share-component";
import CommentSection from "../comment-component";
import { notFound } from "next/navigation";
import { getContent } from "@/hooks/useContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const news = await getContent();
  const berita = news.find((data) => data.id == slug);

  if (!berita) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {/* Bagian Berita */}
          <div className="w-full lg:w-2/3">
            <CustomCard>
              <div className="relative h-64 lg:h-96">
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
                <p className="text-gray-600 mb-4">{berita?.excerpt}</p>
              </div>

              <div>
                <ShareArticle />
              </div>

              <div>
                <CommentSection />
              </div>
            </CustomCard>
          </div>

          {/* Bagian Statistik */}
          <div className="w-full lg:w-1/4">
            <StatisticWidget />
          </div>
        </div>
      </PageContent>

      <APBDSection />
      <Footer />
    </div>
  );
}
