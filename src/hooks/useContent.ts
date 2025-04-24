import type { InfoCard, HeroSection, AboutSection, CTASection, NewsItem, GalleryItem } from "@/types/Simple"

export function useContent() {
  const hero: HeroSection = {
    title: "Selamat Datang di Desa Lubuk Raman",
    description: "Desa yang indah dengan kekayaan budaya dan keramahan masyarakatnya",
    image: "/images/hero/hero-bg.jpeg?height=600&width=1600",
    buttons: {
      primary: {
        text: "Profil Desa",
        url: "/profil",
      },
      secondary: {
        text: "Layanan Publik",
        url: "/layanan",
      },
    },
  }

  const infoCards: InfoCard[] = [
    {
      id: "demografi",
      title: "Demografi",
      description: "Jumlah penduduk Desa Lubuk Raman mencapai 5.000 jiwa dengan 1.200 kepala keluarga",
      icon: "users",
      link: {
        text: "Selengkapnya",
        url: "/demografi",
      },
    },
    {
      id: "wilayah",
      title: "Wilayah",
      description: "Desa Lubuk Raman memiliki luas wilayah 800 hektar dengan 5 dusun/banjar",
      icon: "map-pin",
      link: {
        text: "Selengkapnya",
        url: "/wilayah",
      },
    },
    {
      id: "layanan",
      title: "Layanan",
      description: "Berbagai layanan administrasi dan pelayanan publik untuk masyarakat Desa Lubuk Raman",
      icon: "file-text",
      link: {
        text: "Selengkapnya",
        url: "/layanan",
      },
    },
  ]

  const about: AboutSection = {
    badge: "Tentang Desa",
    title: "Desa Lubuk Raman, Kecamatan Rambang Niru",
    description: [
      "Desa Lubuk Raman merupakan salah satu desa yang terletak di Kecamatan Rambang Niru, Kabupaten Bangli, Provinsi Bali. Desa ini memiliki keindahan alam yang masih asri dengan pemandangan persawahan yang hijau dan udara yang sejuk.",
      "Masyarakat Desa Lubuk Raman masih memegang teguh adat istiadat dan budaya Bali. Berbagai upacara adat dan kegiatan keagamaan masih rutin dilaksanakan sebagai bentuk pelestarian budaya.",
    ],
    image: "/images/about/about-bg.jpeg?height=400&width=600",
    button: {
      text: "Profil Lengkap",
      url: "/profil",
    },
  }

  const news: NewsItem[] = [
    {
      id: "1",
      title: "Kegiatan Gotong Royong Pembangunan Balai Banjar",
      excerpt:
        "Masyarakat Desa Lubuk Raman melaksanakan kegiatan gotong royong dalam rangka pembangunan balai banjar yang akan digunakan sebagai pusat kegiatan masyarakat...",
      date: "12 April 2023",
      readTime: "5 menit membaca",
      image: "/images/news/berita-1.jpeg?height=200&width=400&text=Berita+1",
      slug: "1",
    },
    {
      id: "2",
      title: "Pelatihan Kerajinan Tangan untuk Ibu-Ibu PKK",
      excerpt:
        "Desa Lubuk Raman mengadakan pelatihan kerajinan tangan untuk meningkatkan keterampilan dan ekonomi kreatif bagi ibu-ibu PKK di balai desa...",
      date: "5 April 2023",
      readTime: "4 menit membaca",
      image: "/images/news/berita-2.jpeg?height=200&width=400&text=Berita+2",
      slug: "2",
    },
    {
      id: "3",
      title: "Penyuluhan Kesehatan dan Vaksinasi Gratis",
      excerpt:
        "Bekerjasama dengan Puskesmas setempat, Desa Lubuk Raman mengadakan kegiatan penyuluhan kesehatan dan vaksinasi gratis untuk seluruh warga...",
      date: "28 Maret 2023",
      readTime: "3 menit membaca",
      image: "/images/news/berita-3.jpeg?height=200&width=400&text=Berita+3",
      slug: "3",
    },
  ]

  const gallery: GalleryItem[] = Array.from({ length: 8 }, (_, i) => ({
    id: String(i + 1),
    image: `/images/gallery/galeri${i+1}.jpeg?height=250&width=250&text=Galeri+${i + 1}`,
    title: `Galeri ${i + 1}`,
  }))

  const cta: CTASection = {
    title: "Hubungi Kami",
    description:
      "Untuk informasi lebih lanjut tentang Desa Lubuk Raman atau layanan yang tersedia, silakan hubungi kami melalui kontak di bawah ini.",
    buttons: {
      primary: {
        text: "Hubungi Kami",
        url: "/kontak",
        icon: "phone",
      },
      secondary: {
        text: "Kirim Pesan",
        url: "/pesan",
        icon: "mail",
      },
    },
  }

  return {
    hero,
    infoCards,
    about,
    news,
    gallery,
    cta,
  }
}
