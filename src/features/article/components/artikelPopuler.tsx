"use client"
import { CustomCard } from '@/components/ui/simple/CustomCard'
import React from 'react'
import Image from 'next/image'
import useArticle from '../hooks/useArticle'
import Link from 'next/link'

export default function ArtikelPopuler() {
    const { data } = useArticle();

console.log("Artikel Populer Data:", data);

    return (
        <div className='w-full md:w-1/5 lg:w-1/5'>
            <h2 className='text-xl font-bold mb-4'>Artikel Populer</h2>
            <ul className='space-y-4'>
                {data?.pages[0].data.slice(0, 3).map((item) => (
                    <CustomCard key={item.id} className='shadow-sm hover:shadow-md transition-shadow'>
                        <div className='relative h-35'>
                            <Image src={item.thumbnail ?? "/images/placeholder.svg"} alt='thumbnail' fill className='object cover' />
                        </div>
                        <Link href={`/article/${item.slug}`} className='text-lg font-semibold mt-2 block hover:text-[#0d6b3f]'>
                            {item.title}
                        </Link>
                    </CustomCard>
                ))}                
            </ul>
        </div>
    )
}