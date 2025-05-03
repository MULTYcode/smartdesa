import { Footer } from '@/components/public/layout/Footer'
import { Header } from '@/components/public/layout/Header'
import APBDSection from '@/components/public/sections/apbd-section'
import PageContent from '@/components/public/sections/page-content'
import React from 'react'
import { useContent } from '@/hooks/useContent'
import CarouselPDFViewer from '@/components/public/sections/carousel-pdf-view'

export default function Page() {
    const { produkHukum } = useContent()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <div className="min-w-[1102px]">
                    <CarouselPDFViewer
                        fileItems={produkHukum.map((item) => ({
                            title: item.title,
                            file: item.file,
                        }))}
                    />
                </div>

            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}