import { CustomButton } from "@/components/ui/simple/CustomButton"
import { ChevronRight } from "lucide-react"
import type { HeroSection as HeroSectionType } from "@/types/Simple"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import Image from "next/image"

interface HeroSectionProps {
  data: HeroSectionType
}

export function HeroSection({ data }: HeroSectionProps) {

  const router = useRouter();

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
    <section className="relative h-screen sm:h-[600px] flex justify-center">
      <div className="absolute inset-0 w-full h-full">
        {data?.image?.match(/\.(mp4|webm|ogg)$/i) && data?.image ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={data.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={data?.image ?? '/images/placeholder.svg'}
            alt="Hero Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      {
        data?.title === "" ? (
          <SkeletonHeroContent />
        ) : (
          <div className="relative px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl h-full flex flex-col items-center justify-center">
            <div className="max-w-4xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">{data.title}</h1>
              <p className="text-lg md:text-xl mb-6 text-center">{data.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <CustomButton className="bg-[#0d6b3f] hover:bg-[#0a5733]" onClick={handleClickProfil}>
                  {data.buttons.primary.text}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </CustomButton>
                <CustomButton variant="outline" className="bg-white text-[#0d6b3f] hover:bg-gray-200 hover:text-[#0d6b3f]" onClick={handleClickLayanan}>
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
    <div className="relative max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-0 h-full flex flex-col justify-center">
      <div className="max-w-2xl text-white">
        <Skeleton className="h-10 md:h-14 w-3/4 mb-4 bg-white/20" />
        <Skeleton className="h-6 md:h-8 w-full mb-2 bg-white/20" />
        <Skeleton className="h-6 md:h-8 w-5/6 mb-6 bg-white/20" />

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