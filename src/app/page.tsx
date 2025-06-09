"use client"

import { Header } from "@/components/template/simple/layout/Header"
import { Footer } from "@/components/template/simple/layout/Footer"
import { HeroSection } from "@/components/template/simple/sections/hero-section"
import { InfoSection } from "@/components/template/simple/sections/info-section"
import { AboutSection } from "@/components/template/simple/sections/about-section"
import { NewsSection } from "@/components/template/simple/sections/news-section"
// import { GallerySection } from "@/components/template/simple/sections/gallery-section"
import { CTASection } from "@/components/template/simple/sections/cta-section"
import { useContent } from "@/hooks/useContent"
// import Chatbot from "@/components/template/simple/sections/chatbot"
import { SambutanSection } from "@/components/template/simple/sections/sambutan-section"

export default function Home() {
  const { hero, infoCards, about, cta, infoWellcome, footer, header } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <Header data={header}/>

      <main>
        <HeroSection data={hero} />
        <SambutanSection data={infoWellcome} />
        <InfoSection cards={infoCards} />
        <AboutSection data={about} />
        <NewsSection />
        {/* <GallerySection items={gallery} /> */}
        <CTASection data={cta} />
      </main>

      {/* <Chatbot /> */}

      <Footer data={footer} />
    </div>
  )
}
