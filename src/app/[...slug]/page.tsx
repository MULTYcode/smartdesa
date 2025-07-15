'use client'

import RichTextContent from '@/components/common/RichTextContent';
import ArtikelPopuler from '@/features/article/components/artikelPopuler';
import StaticPageSkeleton from '@/components/common/skeleton/StaticPageSkeleton';
import useStaticPage from '@/hooks/useStaticPage';
import React, { use } from 'react';
import useSetting from '@/hooks/useSettings';
import { MenuWithContent } from '@/types/menu';
import SliderCard from '@/features/infografis/component/sliderInfografis';

function findMenuItemByPath(
  items: MenuWithContent,
  path: string[],
  currentPath = ""
): MenuWithContent[0] | null {
  for (const item of items) {
    const itemPath = item.route ? `${currentPath}${item.route}` : currentPath;

    if (itemPath === `/${path.join("/")}`) {
      return item;
    }

    if (item.child && item.child.length > 0) {
      const found = findMenuItemByPath(item.child, path, itemPath);
      if (found) return found;
    }
  }

  return null;
}

interface PageProps {
    params: Promise<{ slug?: string }>;
}

interface DynamicPageProps {
  params: { slug?: string[] };
}
export const dynamic = 'force-dynamic';

export default function PageStatic({ params }: DynamicPageProps & PageProps) {
    const unwrappedParams = use(params);
    const { data: menu } = useSetting(`menu-${process.env.NEXT_PUBLIC_VILLAGE_ID}`, {});
    const path = Array.isArray(unwrappedParams.slug) ? unwrappedParams.slug : [];
    const menuItem = Array.isArray(menu?.value) ? findMenuItemByPath(menu.value, path) : null;
    const { data, isLoading, isError } = useStaticPage({}, menuItem?.staticPage || "");

    if (isLoading) return <StaticPageSkeleton />;

    if (isError) return <p>Page Not Found</p>;

    return (
        <div className="px-6 sm:px-12  flex justify-between mb-10 mt-10">
              <div className='box-border grid grid-cols-12 gap-5 justify-between'>
                <div className='w-full col-span-12 lg:col-span-9'>
                    <RichTextContent content={data?.content || ''} />
                </div>
                <div className='flex flex-col col-span-12 lg:col-span-3 gap-6 w-full'>    
                    <ArtikelPopuler />
                    <div>
                      <h2 className="text-xl font-bold text-blue-500 mb-4 pb-2 border-gray-300 border-b">Infografis</h2>
                      <div className="relative">
                         <section className="relative w-full flex justify-center items-center">
                          <div className="max-w-full w-full grid grid-cols-9 gap-2 dark:bg-gray-700 dark:border-gray-600">
                                <div className="col-span-9 max-w-full w-full justify-center overflow-hidden dark:bg-gray-800 dark:border-gray-700">                  
                                  <SliderCard slideToShow={1} />
                              </div>
                          </div>
                        </section>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
