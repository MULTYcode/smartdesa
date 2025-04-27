import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'
import { useContent } from '@/hooks/useContent'
import ProductList from './product-card'
import StatisticWidget from '@/components/template/simple/sections/statistic-widget'

export default function Page() {
    const { productItems } = useContent()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <main className="min-h-screen bg-gray-50">
                    <h1 className="text-2xl font-bold text-center mt-8 mb-4">Lapak Desa / Produk UMKM Desa</h1>
                    <ProductList products={productItems} />
                </main>

                <div className="flex flex-col gap-4">
                    <StatisticWidget />
                </div>

            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}