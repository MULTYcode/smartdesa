'use client';

import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import PageContent from "@/components/template/simple/sections/page-content"
import ProfilSection from "@/features/profil/components/profil-section"
import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
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
