import type { SiteInfo } from "@/types/Simple"

export function useSiteInfo(): SiteInfo {
  // This would typically fetch from an API or CMS
  return {
    name: "DESA LUBUK RAMAN",
    tagline: "Rambang Niru, Muara Enim Regency, South Sumatera",
    phone: "+62 123 4567 890",
    email: "info@lubuk-raman.desa.id",
    address: "Jl. Rambang Niru, Lubuk Raman, Kabupaten Muara Enim, South Sumatera",
    logo: "/images/logo/enim.png?height=60&width=60",    
  }
}
