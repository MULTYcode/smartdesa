"use client"
import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import { useSiteInfo } from "@/hooks/useSiteInfo"
import { useNavigation } from "@/hooks/useNavigation"
import { Facebook, Instagram, Mail, Phone, Key, Twitter } from "lucide-react"
import { MobileNav } from "../sections/mobilnav-section"
import { MainNav } from "../sections/mainnav-section"

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

          <div className="flex items-center justify-between">
            <MainNav items={mainNav} />
            <MobileNav items={mainNav} />
            <CustomButton variant="outline" size="icon" className="border-gray-300">
              <Key className="h-4 w-4" />
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          {/* <CustomButton variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </CustomButton> */}
        </div>
      </header>
    </>
  )
}
