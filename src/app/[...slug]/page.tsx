
import RichTextContent from '@/components/common/RichTextContent';
import ArtikelPopuler from '@/features/article/components/artikelPopuler';
import React from 'react';
import { MenuWithContent } from '@/types/menu';
import SliderCard from '@/features/infografis/component/sliderInfografis';
import { formatMetadata } from '@/lib/generate-seo';
import SettingService from '@/shared/services/setting.service';
import { Metadata } from 'next';
import Link from 'next/link';
import { validateAndRedirect } from '@/lib/shouldRedirect';
import { redirect } from 'next/navigation';

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
export async function generateMetadata({ params }: PageProps ): Promise<Metadata> {
  const unwrappedParams = await params;
  const { data: menu } = await SettingService.getSetting(`menu-${process.env.NEXT_PUBLIC_VILLAGE_ID}`, {});
  const logoResponse = await SettingService.getSetting (`logo-${process.env.NEXT_PUBLIC_VILLAGE_ID}`)
  const path = Array.isArray(unwrappedParams.slug) ? unwrappedParams.slug : [];
  const menuItem = Array.isArray(menu?.value) ? findMenuItemByPath(menu.value, path) : null;
  try {
    const menuData = await SettingService.getStaticPage(menuItem?.staticPage || "");
    return formatMetadata({ ...menuData.data, type: "article" }, { siteName: logoResponse?.data?.value?.regionEntity || "Pemerintah Kabupaten Muara Enim", defaultImage: logoResponse?.data?.value?.imageUrl  });
  } catch {
    return {
      title: `Menu | Pemerintah Kabupaten Muara Enim`,
    };
  }
}

export default async function PageStatic({ params }: DynamicPageProps & PageProps) {
    const unwrappedParams = await params;
    const path = Array.isArray(unwrappedParams.slug) ? unwrappedParams.slug : [];
      try {
    const { data: menu } = await SettingService.getSetting(
      `menu-${process.env.NEXT_PUBLIC_VILLAGE_ID}`,
      {}
    );

    
    const menuItem = Array.isArray(menu?.value)
    ? findMenuItemByPath(menu.value, path)
    : null;
    
    const { data } = await SettingService.getStaticPage(menuItem?.staticPage || '');

    
    return (
     <div className='flex justify-center'>
         <div className="w-full px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex justify-between mb-10 mt-10">
            <div className="box-border grid grid-cols-12 gap-4 xl:gap-12 justify-between">
              <div className="w-full col-span-12 md:col-span-7 lg:col-span-8">
                <RichTextContent content={data?.content || ''} />
              </div>
              <div className="md:sticky md:top-24 md:self-start h-fit flex flex-col col-span-12 md:col-span-5 lg:col-span-4 gap-6 w-full">
                <ArtikelPopuler />
                <SliderCard slideToShow={1} />
              </div>
            </div>
          </div>
     </div>
    );
  } catch  {
     if (validateAndRedirect(path)) {
      const redirects: Record<string, string> = {
      tour: '/tour',
      article: '/article',
      };
      return redirect(redirects[path[0]] || '/');
    }
      return (
        <div className="flex flex-col text-center items-center justify-center h-96 w-full text-gray-700">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="mt-2 text-lg">Halaman yang kamu cari tidak ditemukan.</p>
          <Link href="/" className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
            Kembali ke Beranda
          </Link>
        </div>
      )
  }
}
