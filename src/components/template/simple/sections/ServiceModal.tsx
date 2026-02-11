"use client"

import { Modal } from "@/components/ui/modal"
import { FeatureCard } from "@/components/ui/simple/feature-card"
import type { InfoCard } from "@/types/Simple"
import { Icon, type LucideIcon } from "lucide-react"
import Icons from "@/icons/icons"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: InfoCard | null
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service || !service.child) return null
   const IconComponent = Icons[service.icon] as LucideIcon

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-6">
        <div className="flex-cols flex items-center gap-4 mb-6">
             {service.image ? (
          <div className="rounded-full bg-[#0d6b3f]/10 p-0 w-12 h-12 flex items-center justify-center mb-4 overflow-hidden flex-shrink-0">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
           service.icon && (
            <div className="rounded-full bg-[#0d6b3f]/10 p-3 w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
              <IconComponent className="h-6 w-6 text-[#0d6b3f]" />
            </div>
          )
        )}
           <div className="flex-none">
                 <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
                {service.title}
            </h2>
            <p className="text-gray-500">{service.description}</p>
           </div>
        </div>

        <div className="flex-grow overflow-y-auto pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {service.child.map((child) => {
                const IconComponent = Icons[child.icon] as LucideIcon
                return (
                <FeatureCard
                    key={child.id}
                    title={child.title}
                    description={child.description || `Informasi tentang ${child.title}`}
                    icon={IconComponent}
                    image={child.image}
                    className="h-full"
                    link={
                    typeof child.link === "string"
                        ? { text: "Selengkapnya", url: child.link }
                        : child.link
                    }
                />
                )
            })}
            </div>
        </div>
    </Modal>
  )
}
