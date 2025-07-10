"use client"

import { HeroSection } from "@/components/template/simple/sections/hero-section"
import { InfoSection } from "@/components/template/simple/sections/info-section"
import { AboutSection } from "@/components/template/simple/sections/about-section"
import { NewsSection } from "@/components/template/simple/sections/news-section"
import { CTASection } from "@/components/template/simple/sections/cta-section"
import { useContent } from "@/hooks/useContent"
import { SambutanSection } from "@/components/template/simple/sections/sambutan-section"

export default function Home() {
  const { hero, infoCards, about, cta, infoWellcome, infoProgram } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroSection data={hero} />
        <SambutanSection data={{ wellcome: infoWellcome, program: infoProgram }} />
        <InfoSection cards={infoCards} />
        <AboutSection data={about} />
        <NewsSection />
        <CTASection data={cta} />
      </main>
    </div>
  )
}
