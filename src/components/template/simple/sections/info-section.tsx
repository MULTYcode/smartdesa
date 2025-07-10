import { FeatureCard } from "@/components/ui/simple/feature-card"
import type { InfoCard } from "@/types/Simple"

import Icons from "@/icons/icons"

interface InfoSectionProps {
  cards: InfoCard[]
}

export function InfoSection({ cards }: InfoSectionProps) {
  // Function to get the correct icon component

  return (
    <section id="info-layanan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Informasi dan Layanan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kenali lebih dekat tentang potensi, dan keunggulan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
              const IconComponent = Icons[card.icon] ?? Icons.FaQuestion
            return (
            <FeatureCard
              key={card.id}
              title={card.title}
              description={`Semua informasi tentang ${card.title} dapat kamu lihat disini.`}
              icon={IconComponent}
              link={
                typeof card.link === "string"
                  ? { text: "Selengkapnya", url: card.link }
                  : card.link
              }
            />
          )})}
        </div>
      </div>
    </section>
  )
}
