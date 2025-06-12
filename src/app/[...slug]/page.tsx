'use client'

import RichTextContent from '@/components/common/RichTextContent';
import ArtikelIklan from '@/features/article/components/artikelIklan';
import ArtikelPopuler from '@/features/article/components/artikelPopuler';
import useStaticPage from '@/hooks/useStaticPage';
import React, { use } from 'react';

interface PageProps {
    params: Promise<{ slug?: string }>;
}


export default function Page({ params }: PageProps) {
    const unwrappedParams = use(params);
    const slug = unwrappedParams.slug ?? '';    
    const { data, isLoading, isError } = useStaticPage({}, slug || "");

    if (isLoading) return <>
        <div className="animate-pulse space-y-4 p-6">
            <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
            <div className="flex space-x-4">
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
            </div>
            <div className="h-56 w-full bg-gray-200 rounded"></div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
        </div>
    </>;

    if (isError) return <p>Page Not Found</p>;

    return (
        <div className="container mx-auto px-4 flex justify-between mb-10 mt-10">
            <div className="container mx-auto px-4 py-8 max-w-8xl">
                <div className='box-border flex flex-wrap mx-auto justify-between'>
                    <div className='w-full md:w-1.5/5 lg:w-3/5'>
                        <RichTextContent content={data?.content || ''} />
                    </div>
                    <ArtikelPopuler />
                    <ArtikelIklan />
                </div>
            </div>
        </div>
    );
}
