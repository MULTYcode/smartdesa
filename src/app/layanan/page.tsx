import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'
import StatisticWidget from '@/components/template/simple/sections/statistic-widget'
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