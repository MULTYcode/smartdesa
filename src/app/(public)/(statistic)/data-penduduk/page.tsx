import { Footer } from '@/components/public/layout/Footer'
import { Header } from '@/components/public/layout/Header'
import APBDSection from '@/components/public/sections/apbd-section'
import PageContent from '@/components/public/sections/page-content'
import React from 'react'
import DataTablePenduduk from './datatable-component'
import { useContent } from '@/hooks/useContent'

export default function Page() {

    const { dataPenduduk, kategoriKeluarga } = useContent()

    return (
        <>
            <Header />
            <PageContent>

                <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <DataTablePenduduk
                        data={dataPenduduk}
                        kategoriKeluarga={kategoriKeluarga}
                    />
                </div>

            </PageContent>

            <APBDSection />

            <Footer />
        </>
    )
}