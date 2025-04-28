import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import { NewsCard } from "@/components/template/simple/sections/news-card"
import PageContent from "@/components/template/simple/sections/page-content"
import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
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
