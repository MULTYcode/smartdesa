import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'
import { useContent } from '@/hooks/useContent'
import CarouselPDFViewer from '@/components/template/simple/sections/carousel-pdf-view'

export default function Page() {
    const { produkHukum } = useContent()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <CarouselPDFViewer
                    fileItems={produkHukum.map((item) => ({
                        title: item.title,
                        file: item.file,
                    }))}
                />

            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}