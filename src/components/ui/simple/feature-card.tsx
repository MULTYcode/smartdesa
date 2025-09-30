import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { CustomCard } from "@/components/ui/simple/CustomCard"

export interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  iconColor?: string
  accentColor?: string
  link: {
    text: string
    url: string
  }
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accentColor = "#0d6b3f",
  link,
  className,
}: FeatureCardProps) {
  return (
     <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
      >
          <CustomCard variant="accent" accentColor={accentColor} className={cn(className)}>
          <div className="pt-6">
            {Icon && (
              <div className="rounded-full bg-[#0d6b3f]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-[#0d6b3f]" />
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
             <p className="text-[#0d6b3f] font-medium flex items-center hover:underline">
               {link.text}
            <ChevronRight className="h-4 w-4 ml-1" />
             </p>
          </div>
        </CustomCard>
      </Link>

  )
}
