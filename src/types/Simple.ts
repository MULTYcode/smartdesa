// Site Information Types
export interface SiteInfo {
  name: string
  tagline: string
  phone: string
  email: string
  address: string
  logo: string
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: string
  isActive?: boolean
  children?: NavItem[]
}

//aparatur Types
export interface AparaturInterface {
  nama: string
  jabatan: string
  foto?: string
}

// Social Media Types
export interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin"
  url: string
}

// Info Card Types
export interface InfoCard {
  id: string
  title: string
  description: string
  icon: string
  link: {
    text: string
    url: string
  }
}

// News Item Types
export interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  slug: string
}

// Gallery Item Types
export interface GalleryItem {
  id: string
  image: string
  title: string
}

// Service Types
export interface Service {
  id: string
  title: string
  url: string
}

// Hero Section Types
export interface HeroSection {
  title: string
  description: string
  image: string
  buttons: {
    primary: {
      text: string
      url: string
    }
    secondary: {
      text: string
      url: string
    }
  }
}

// About Section Types
export interface AboutSection {
  badge: string
  title: string
  description: string[]
  image: string
  button: {
    text: string
    url: string
  }
}

// CTA Section Types
export interface CTASection {
  title: string
  description: string
  buttons: {
    primary: {
      text: string
      url: string
      icon: string
    }
    secondary: {
      text: string
      url: string
      icon: string
    }
  }
}

// Profil Section Types
export interface ProfilInterface {
  title: string
  date: string
  author: string
  readTime: string
  content: string
}

// Pemerintah Desa Section Types
export interface PemerintahInterface {
  title: string
  date: string
  author: string
  readTime: string
  content: string
}

// Budget Section Types
export interface BudgetInterface {
  title: string,
  current: string,
  target: string,
  percentage: number,
}

export interface DataPendudukInterface {
  id: number,
  wilayah: string,
  kk: number,
  lp: number,
  l: number,
  p: number
}

export interface KategoriKeluargaInterface {
  id: number,
  kategori: string,
  jumlah: number,
}

export interface DataStatisticInterface {
  id: number,
  kategori: string,
  lp: number,
  l: number,
  p: number
}

export interface ProdukHukumInterface {
  id: number,
  title: string,
  file: string
}