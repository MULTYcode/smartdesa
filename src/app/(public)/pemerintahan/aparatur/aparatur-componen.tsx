"use client"
import React from "react"
import { AparaturInterface } from "@/types/Simple"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface CardGridProps {
  data: AparaturInterface[]
}

export const AparaturComponent: React.FC<CardGridProps> = ({ data }) => {
  const router = useRouter()

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/default-avatar.png"
  }

  const handleClick = (nama: string) => {
    router.push(`/detail/${encodeURIComponent(nama)}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
      {data.map((person, index) => (
        <div
          key={index}
          onClick={() => handleClick(person.nama)}
          className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer hover:bg-gray-50 w-[250px] text-center"
        >
          <Image
            src={person.foto || "/default-avatar.png"}
            alt={person.nama}
            onError={handleImageError}
            width={112} // misalnya untuk 28 x 4 (karena 1rem = 16px)
            height={112}
            className="rounded-full object-cover border mb-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{person.nama}</h3>
            <p className="text-base text-gray-500">{person.jabatan}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
