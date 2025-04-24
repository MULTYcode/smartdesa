import type { NavItem, SocialLink, Service } from "@/types/Simple"

export function useNavigation() {
  const mainNav: NavItem[] = [
    {
      label: "Beranda",
      href: "/",
      icon: "home",
      isActive: true,
    },
    {
      label: "Profil Desa",
      href: "/profil",
    },
    {
      label: "Pemerintahan Desa",
      href: "/pemerintahan",
    },
    {
      label: "Data Desa",
      href: "/data-desa",
    },
    {
      label: "Regulasi",
      href: "/regulasi",
    },
    {
      label: "Pembangunan",
      href: "/pembangunan",
    },
    {
      label: "Status Desa",
      href: "/status-desa",
    },
    {
      label: "Galeri",
      href: "/galeri-desa",
    },
    {
      label: "Lapak Desa",
      href: "/lapak-desa",
    },
  ]

  const socialLinks: SocialLink[] = [
    {
      platform: "facebook",
      url: "#",
    },
    {
      platform: "twitter",
      url: "#",
    },
    {
      platform: "instagram",
      url: "#",
    },
  ]

  const quickLinks: NavItem[] = [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Profil Desa",
      href: "/profil",
    },
    {
      label: "Pemerintahan",
      href: "/pemerintahan",
    },
    {
      label: "Layanan",
      href: "/layanan",
    },
    {
      label: "Berita",
      href: "/berita",
    },
    {
      label: "Galeri",
      href: "/galeri",
    },
  ]

  const services: Service[] = [
    {
      id: "ktp",
      title: "Pembuatan KTP",
      url: "/layanan/ktp",
    },
    {
      id: "kk",
      title: "Pembuatan KK",
      url: "/layanan/kk",
    },
    {
      id: "akta",
      title: "Pembuatan Akta",
      url: "/layanan/akta",
    },
    {
      id: "surat",
      title: "Surat Keterangan",
      url: "/layanan/surat",
    },
    {
      id: "pengaduan",
      title: "Pengaduan Masyarakat",
      url: "/layanan/pengaduan",
    },
  ]

  return {
    mainNav,
    socialLinks,
    quickLinks,
    services,
  }
}
