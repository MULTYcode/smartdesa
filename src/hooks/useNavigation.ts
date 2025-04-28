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
      children: [
        {
          label: "Profil Wilayah",
          href: "/profil",
        },
        {
          label: "Sejarah",
          href: "/profil/sejarah",
        },
      ],
    },
    {
      label: "Pemerintahan Desa",
      href: "/pemerintahan",
      children: [
        {
          label: "Visi & Misi",
          href: "/pemerintahan",
        },
        {
          label: "Aparatur",
          href: "/pemerintahan/aparatur",
        },
      ],
    },
    {
      label: "Data Desa",
      href: "/data-penduduk",
      children: [
        {
          label: "Statistic Penduduk",
          href: "/data-penduduk",
        },
        {
          label: "Statistic Keluarga",
          href: "/data-keluarga",
        },
      ],
    },
    {
      label: "Regulasi",
      href: "/produk-hukum",
      children: [
        {
          label: "Produk Hukum",
          href: "/produk-hukum",
        },
        {
          label: "Informasi Public",
          href: "/informasi-public",
        },
      ],
    },
    // {
    //   label: "Galeri",
    //   href: "/galeri",
    // },
    {
      label: "Layanan",
      href: "/layanan",
      children: [
        {
          label: "Pembuatan KTP",
          href: "/layanan-ktp",
        },
        {
          label: "Pembuatan KK",
          href: "/layanan-kk",
        },
        {
          label: "Pembuatan Akte",
          href: "/layanan-akte",
        },
        {
          label: "Surat Keterangan",
          href: "/layanan-keterangan",
        },
        {
          label: "Pengaduan",
          href: "/layanan-pengaduan",
        },
      ],
    },
    // {
    //   label: "Lapak Desa",
    //   href: "/lapak-desa",
    // },
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
    // {
    //   label: "Layanan",
    //   href: "/layanan",
    // },
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
