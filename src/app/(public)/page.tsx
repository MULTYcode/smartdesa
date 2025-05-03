"use client"

import { Header } from "@/components/public/layout/Header"
import { Footer } from "@/components/public/layout/Footer"
import { InfoSection } from "@/components/public/sections/info-section"
import { AboutSection } from "@/components/public/sections/about-section"
import { NewsSection } from "@/components/public/sections/news-section"
import { GallerySection } from "@/components/public/sections/gallery-section"
import { CTASection } from "@/components/public/sections/cta-section"
import { useContent } from "@/hooks/useContent"
import Chatbot from "@/components/public/sections/chatbot"
import { HeroSection } from "@/components/public/sections/hero-section"

export default function Home() {
  const { hero, infoCards, about, news, gallery, cta } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main>
        <HeroSection data={hero} />
        <InfoSection cards={infoCards} />
        <AboutSection data={about} />
        <NewsSection news={news} />
        <GallerySection items={gallery} />
        <CTASection data={cta} />
      </main>

      <Chatbot/>

      <Footer />
    </div>
  )
}
