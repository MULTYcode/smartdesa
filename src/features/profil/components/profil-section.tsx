import React from 'react'
import { VisiMisiInterface } from '../types/visi-misi'

interface ProfilSectionProps {
  data?: VisiMisiInterface
}

export default function ProfilSection({ data }: ProfilSectionProps) {
  return (
    <>
      <section className="lg:w-3/2 w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-2">{data!.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          <span>{data!.published_at} &bull; </span>
          <span>{data!.id} &bull; </span>
          <span>{data!.id}</span>
        </div>

        <article
          className="prose max-w-none prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-justify"
          dangerouslySetInnerHTML={{ __html: data!.description }}
        />
      </section>
    </>
  )
}