import { FeatureCard } from "@/components/ui/simple/feature-card"
import type { InfoCard } from "@/types/Simple"

import type { LucideIcon } from "lucide-react"
import Icons from "@/icons/icons"
import { useContent } from "@/hooks/useContent"

interface InfoSectionProps {
  cards: InfoCard[]
}

export function InfoSection({ cards }: InfoSectionProps) {
  const { service } = useContent();

  return (
    <section id="info-layanan" className="py-16 bg-gray-50">
      <div className="px-6 sm:px-12 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {service.subTittle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
              const IconComponent = Icons[card.icon] as LucideIcon
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
              )
          })}
        </div>
      </div>
    </section>
  )
}
