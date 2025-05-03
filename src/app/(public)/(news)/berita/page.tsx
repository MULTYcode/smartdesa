import { Footer } from "@/components/public/layout/Footer"
import { Header } from "@/components/public/layout/Header"
import APBDSection from "@/components/public/sections/apbd-section"
import { NewsCard } from "@/components/public/sections/news-card"
import PageContent from "@/components/public/sections/page-content"
import StatisticWidget from "@/components/public/sections/statistic-widget"
import { useContent } from "@/hooks/useContent"

export default function Page() {

    const { news } = useContent()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <div className="w-full flex gap-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                    <div className="lg:w-3/5">
                        <StatisticWidget />
                    </div>

                </div>


            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}
