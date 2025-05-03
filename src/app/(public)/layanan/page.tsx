import { Footer } from '@/components/public/layout/Footer'
import { Header } from '@/components/public/layout/Header'
import APBDSection from '@/components/public/sections/apbd-section'
import PageContent from '@/components/public/sections/page-content'
import React from 'react'
import StatisticWidget from '@/components/public/sections/statistic-widget'
import LayananCard from './layanan-component'

export default function Page() {

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <LayananCard/>

                <div className="flex flex-col gap-4">
                    <StatisticWidget />
                </div>

            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}