import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'
import { useContent } from '@/hooks/useContent'
import Image from "next/image"

export default function Page() {
    const { gallery } = useContent()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <PageContent>

                <section className="py-5">
                    <div className="container mx-auto px-4">
                        <div className="flex item-center text-center mb-3">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Desa</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {gallery.map((item) => (
                                <div key={item.id} className="relative md:w-64 h-80 w-80 md:h-64 rounded-lg overflow-hidden group">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>               

            </PageContent>

            <APBDSection />

            <Footer />
        </div>
    )
}