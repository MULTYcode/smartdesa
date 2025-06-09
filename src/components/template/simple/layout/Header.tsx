"use client"
import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import { MobileNav } from "../sections/mobilnav-section"
import { MainNav } from "../sections/mainnav-section"
import Topbar from "@/features/header/components/topbar"
import { Key } from "lucide-react"

interface HeaderProps {
  data?: {
    logo: string,
    regionEntity: string,
    regionDescription: string,
    menus: [],
  }
}

export function Header({ data }: HeaderProps) {

  const mainNav = ((data?.menus ?? []).length > 0) ? (data?.menus ?? [])
    : [
      {
        "order": 1,
        "title": "Home",
        "route": "/",
        "staticPage": null,
        "child": null
      },
      {
        "order": 2,
        "title": "Artikel",
        "route": "/article",
        "staticPage": null,
        "child": null
      },
      {
        "order": 3,
        "title": "Wisata",
        "route": "/tour",
        "staticPage": null,
        "child": null
      }
    ]

  return (
    <>
      {/* Top Bar */}
      <Topbar />

      {/* Header */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src={data?.logo || "/images/placeholder.svg"}
              alt={`${data?.regionEntity} Logo`}
              width={60}
              height={60}
              className="rounded-full bg-transparent"
            />
            <div>
              <h1 className="font-bold text-xl text-[#0d6b3f]">{data?.regionEntity}</h1>
              <p className="text-sm text-gray-600">{data?.regionDescription}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <MainNav items={mainNav} />
            <MobileNav items={mainNav} />
            <CustomButton variant="outline" size="icon" className="border-gray-300" onClick={() => window.open('http://localhost:3003', '_blank')}>
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
