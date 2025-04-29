import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'
import DataTablePenduduk from './datatable-component'
import { useContent } from '@/hooks/useContent'

export default function Page() {
    const { statisticKeluarga } = useContent()

    return (
        <>
            <Header />
            <PageContent>

                <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <DataTablePenduduk
                        data={statisticKeluarga}
                    />
                </div>

            </PageContent>

            <APBDSection />

            <Footer />
        </>
    )
}