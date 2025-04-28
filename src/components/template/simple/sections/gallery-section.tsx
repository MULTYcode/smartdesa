import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import type { GalleryItem } from "@/types/Simple"
import { useRouter } from "next/navigation";

interface GallerySectionProps {
  items: GalleryItem[]
}

export function GallerySection({ items }: GallerySectionProps) {
  const router = useRouter();

  const handleClickAll = () => {
    router.push('/galeri');
  };

  const handleSelected = () => {
    router.push('/galeri');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Desa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Potret keindahan alam dan kegiatan masyarakat Desa Peninjoan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="relative h-48 md:h-64 rounded-lg overflow-hidden group">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <CustomButton variant="outline" size="sm" className="text-white border-white hover:bg-white/20" onClick={handleSelected}>
                  Lihat
                </CustomButton>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <CustomButton variant="outline" className="border-[#0d6b3f] text-[#0d6b3f] hover:bg-[#0d6b3f] hover:text-white" onClick={handleClickAll}>
            Lihat Semua Galeri
          </CustomButton>
        </div>
      </div>
    </section>
  )
}
