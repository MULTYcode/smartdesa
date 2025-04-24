import { ProfilInterface } from '@/types/Simple'
import React from 'react'

interface ProfilSectionProps {
  profil: ProfilInterface
}

export default function ProfilSection({ profil }: ProfilSectionProps) {
  return (
    <>
      <section className="lg:w-3/2 w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-2">{profil.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          <span>{profil.date} &bull; </span>
          <span>{profil.author} &bull; </span>
          <span>{profil.readTime}</span>
        </div>

        <article
          className="prose max-w-none prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-justify"
          dangerouslySetInnerHTML={{ __html: profil.content }}
        />
      </section>
    </>
  )
}