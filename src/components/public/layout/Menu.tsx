// app/components/Menu.tsx
import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link href="/">Beranda</Link>
      <Link href="/about">Tentang</Link>
      <Link href="/contact">Kontak</Link>
    </nav>
  )
}
