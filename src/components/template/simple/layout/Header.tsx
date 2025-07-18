"use client"
import Image from "next/image"
import { MainNav } from "@/components/navigation/main-nav"
import Topbar from "@/features/header/components/topbar"
import { NavItem } from "@/types/Simple"
import Link from "next/link"

interface HeaderProps {
  data?: {
    logo: string,
    regionEntity: string,
    regionDescription: string,
    menus: NavItem[],
  }
}

export function Header({ data }: HeaderProps) {

  const mainNav = data?.menus ?? []
  const hasBrackets = /[\[\]]/.test(data?.regionEntity ?? '');

  return (
    <>
      {/* Top Bar */}
      <Topbar />

      {/* Header */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="px-6 sm:px-12 w-full flex justify-between items-center">
          <div className="flex items-center space-x-3">

            {
              !data?.regionEntity || hasBrackets ? (
                <>
                  <div>
                    <div className="h-10 w-10 bg-gray-300 animate-pulse rounded"></div>
                  </div>
                  <div>
                    <div className="h-6 w-40 bg-gray-300 animate-pulse rounded"></div>
                  </div>
                </>
              ) : (
                <Link href="/" className={`flex flex-row py-1 space-x-3 rtl:space-x-reverse rounded-md lg:hover:scale-95 transition transform duration-300 ease-in-out`}>
                  <Image
                    className="h-1"
                    src={data?.logo ?? '/images/logo/enim.png'}
                    alt="Logo"
                    width={500}
                    height={300}
                    style={{
                      width: "38px",
                      height: "auto",
                    }}
                  />
                   <div className="flex flex-col justify-center">
                      <h1 className="font-bold text-lg leading-5 text-[#0d6b3f]">{data?.regionEntity}</h1>
                      <p className="text-xs font-semibold text-gray-600">{data?.regionDescription}</p>
                    </div>
                </Link>
              )
            }

            {/* <Image
              className="h-1"
              src={data?.logo ?? '/images/logo/enim.png'}
              alt="Logo"
              width={500}
              height={300}
              style={{
                width: "38px",
                height: "auto",
              }}
            />
            <div>
              <h1 className="font-bold text-xl text-[#0d6b3f]">{data?.regionEntity}</h1>
              <p className="text-sm text-gray-600">{data?.regionDescription}</p>
            </div>*/}
          </div>

          {
          mainNav.length === 0 || mainNav.length <= 3 ? (
            <div className="flex items-center justify-between space-x-4">
              {/* MainNav Placeholder */}
              <div className="hidden md:flex space-x-4">
                <div className="h-4 w-16 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-4 w-20 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-4 w-12 bg-gray-300 animate-pulse rounded"></div>
              </div>

              {/* MobileNav Icon Placeholder */}
              <div className="md:hidden h-6 w-6 bg-gray-300 animate-pulse rounded"></div>

              {/* CustomButton Placeholder */}
              <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"></div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <MainNav menuData={(mainNav?.length > 0) ? mainNav
                            :  [
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
                            ]}  />
            </div>
          )
        } 

            {/* <div className="flex items-center justify-between">
              <MainNav items={mainNav} />
              <MobileNav items={mainNav} />
              <CustomButton variant="outline" size="icon" className="border-gray-300" onClick={() => window.open('http://localhost:3003', '_blank')}>
                <Key className="h-4 w-4" />
              </CustomButton>
            </div> */}

            {/* Mobile Menu Button */}
            {/* <CustomButton variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </CustomButton> */}
          </div>
      </header>
    </>
  )
}
