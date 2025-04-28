'use client'; // Untuk Next.js App Router

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  IdCard,
  FileText,
  ScrollText,
  FileSignature,
  Megaphone,
  LucideIcon,
} from 'lucide-react';

interface CardItem {
  id: number;
  icon: LucideIcon;
  color: string;
  title: string;
  route: string; // ➔ Tambahkan route tujuan
}

interface LayananComponentProps {
  items: CardItem[];
}

const LayananComponent: FC<LayananComponentProps> = ({ items }) => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.route)}
          className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 text-center cursor-pointer"
        >
          <item.icon className={`h-10 w-10 ${item.color} mb-2`} />
          <p className="text-sm font-medium text-gray-700">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default function LayananCard() {
  const cardItems: CardItem[] = [
    { id: 1, icon: IdCard, color: 'text-green-600', title: 'Pembuatan KTP', route: '/layanan/ktp' },
    { id: 2, icon: FileText, color: 'text-blue-600', title: 'Pembuatan KK', route: '/layanan/kk' },
    { id: 3, icon: ScrollText, color: 'text-gray-600', title: 'Pembuatan Akte', route: '/layanan/akte' },
    { id: 4, icon: FileSignature, color: 'text-yellow-500', title: 'Surat Keterangan', route: '/layanan/surat-keterangan' },
    { id: 5, icon: Megaphone, color: 'text-purple-600', title: 'Pengaduan', route: '/layanan/pengaduan' },
  ];

  return <LayananComponent items={cardItems} />;
}
