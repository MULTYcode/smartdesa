'use client';

import { Footer } from "@/components/public/layout/Footer"
import { Header } from "@/components/public/layout/Header"
import APBDSection from "@/components/public/sections/apbd-section"
import PageContent from "@/components/public/sections/page-content"
import ProfilSection from "@/features/profil/components/profil-section"
import StatisticWidget from "@/components/public/sections/statistic-widget"
import useVisiMisi from "@/features/profil/hooks/useVisiMisi";

export default function Page() {

  const { data, isLoading, isError, error } = useVisiMisi()

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!data) return <p>Data kosong</p>;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>

        <ProfilSection data={data} />

        <div className="w-full lg:w-2/4 flex flex-col gap-4">
          <StatisticWidget />
        </div>

      </PageContent>

      <APBDSection />

      <Footer />
    </div>
  )
}
