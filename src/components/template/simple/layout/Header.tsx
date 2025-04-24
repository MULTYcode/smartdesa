import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import { useSiteInfo } from "@/hooks/useSiteInfo"
import { useNavigation } from "@/hooks/useNavigation"
import { Facebook, Instagram, Mail, Menu, Phone, Search, Key, Twitter } from "lucide-react"

export function Header() {
  const siteInfo = useSiteInfo()
  const { mainNav, socialLinks } = useNavigation()

  // Function to render the correct social icon
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0d6b3f] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{siteInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{siteInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.url} aria-label={social.platform}>
                {renderSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src={siteInfo.logo || "/images/placeholder.svg"}
              alt={`${siteInfo.name} Logo`}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold text-xl text-[#0d6b3f]">{siteInfo.name}</h1>
              <p className="text-sm text-gray-600">{siteInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium flex items-center ${
                  item.isActive ? "text-[#0d6b3f] hover:text-[#0a5733]" : "text-gray-700 hover:text-[#0d6b3f]"
                }`}
              >
                {item.icon === "home" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                <span>{item.label}</span>
              </a>
            ))}
            <CustomButton variant="outline" size="icon" className="border-gray-300">
              <Key className="h-4 w-4" />
            </CustomButton>
          </nav>

          {/* Mobile Menu Button */}
          <CustomButton variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </CustomButton>
        </div>
      </header>
    </>
  )
}
