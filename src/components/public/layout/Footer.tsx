import Image from "next/image"
import { useSiteInfo } from "@/hooks/useSiteInfo"
import { useNavigation } from "@/hooks/useNavigation"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  const siteInfo = useSiteInfo()
  const { quickLinks, services, socialLinks } = useNavigation()

  // Function to render the correct social icon
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={siteInfo.logo || "/placeholder.svg"}
                alt={`${siteInfo.name} Logo`}
                width={60}
                height={60}
                className="rounded-full bg-white"
              />
              <div>
                <h3 className="font-bold text-xl">{siteInfo.name}</h3>
                <p className="text-sm text-gray-400">{siteInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Website resmi Desa Lubuk Raman yang menyediakan informasi dan layanan untuk masyarakat.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-white hover:text-[#0d6b3f]"
                  aria-label={social.platform}
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={service.url} className="text-gray-400 hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#0d6b3f]" />
                <span className="text-gray-400">{siteInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#0d6b3f]" />
                <span className="text-gray-400">{siteInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#0d6b3f]" />
                <span className="text-gray-400">{siteInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} {siteInfo.name}. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
