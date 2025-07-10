// import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import { ChevronRight } from "lucide-react"
import type { HeroSection as HeroSectionType } from "@/types/Simple"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface HeroSectionProps {
  data: HeroSectionType
}

export function HeroSection({ data }: HeroSectionProps) {

  const router = useRouter();

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleClickProfil = () => {
    router.push('/article');
  };

  const handleClickLayanan = () => {
    router.push('#info-layanan');
  };

  return (
    <section className="relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        {/* <Image src={data.image || "/placeholder.svg"} alt="Hero Image" fill className="object-cover" priority /> */}
        {isClient && data?.image?.endsWith(".mp4") && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={data?.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {
        data?.title === "" ? (
          <SkeletonHeroContent />
        ) : (
          <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <div className="max-w-4xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">{data.title}</h1>
              <p className="text-lg md:text-xl mb-6 text-center">{data.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <CustomButton className="bg-[#0d6b3f] hover:bg-[#0a5733]" onClick={handleClickProfil}>
                  {data.buttons.primary.text}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </CustomButton>
                <CustomButton variant="outline" className="bg-white text-[#0d6b3f] hover:bg-gray-100" onClick={handleClickLayanan}>
                  {data.buttons.secondary.text}
                </CustomButton>
              </div>
            </div>
          </div>
        )
      }


    </section>
  )
}

export default function SkeletonHeroContent() {
  return (
    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
      <div className="max-w-2xl text-white">
        {/* Title */}
        <Skeleton className="h-10 md:h-14 w-3/4 mb-4 bg-white/20" />
        {/* Description */}
        <Skeleton className="h-6 md:h-8 w-full mb-2 bg-white/20" />
        <Skeleton className="h-6 md:h-8 w-5/6 mb-6 bg-white/20" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Skeleton className="h-10 w-40 bg-white/30 rounded-md" />
          <Skeleton className="h-10 w-40 bg-white/30 rounded-md" />
        </div>
      </div>
    </div>
  )
}

const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded ${className}`} />
)