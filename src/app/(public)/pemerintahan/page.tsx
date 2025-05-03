import { Footer } from '@/components/public/layout/Footer'
import { Header } from '@/components/public/layout/Header'
import APBDSection from '@/components/public/sections/apbd-section'
import PageContent from '@/components/public/sections/page-content'
import StatisticWidget from '@/components/public/sections/statistic-widget'
import { useContent } from '@/hooks/useContent'
import React from 'react'

export default function Page() {
  const { pemerintah } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageContent>
        <section className="lg:w-3/2 w-full">
          <h1 className="text-3xl font-bold text-green-700 mb-2">{pemerintah.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>{pemerintah.date} &bull; </span>
            <span>{pemerintah.author} &bull; </span>
            <span>{pemerintah.readTime}</span>
          </div>

          <article
            className="prose max-w-none prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-justify"
            dangerouslySetInnerHTML={{ __html: pemerintah.content }}
          />
        </section>

        <div className="w-full lg:w-2/4 flex flex-col gap-4">
          <StatisticWidget />
        </div>

      </PageContent>

      <APBDSection />

      {/* <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          <section className="lg:w-2/3 w-full">
            <h1 className="text-3xl font-bold text-green-700 mb-2">{pemerintah.title}</h1>
            <div className="text-sm text-gray-500 mb-4">
              <span>{pemerintah.date} &bull; </span>
              <span>{pemerintah.author} &bull; </span>
              <span>{pemerintah.readTime}</span>
            </div>

            <article
              className="prose max-w-none prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-justify"
              dangerouslySetInnerHTML={{ __html: pemerintah.content }}
            />
          </section>

        </div>
      </main> */}

      <Footer />
    </div>

  )
}