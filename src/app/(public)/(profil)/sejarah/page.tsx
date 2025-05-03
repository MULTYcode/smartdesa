import { Footer } from "@/components/public/layout/Footer"
import { Header } from "@/components/public/layout/Header"
import APBDSection from "@/components/public/sections/apbd-section"
import PageContent from "@/components/public/sections/page-content"
import ProfilSection from "@/features/profil/components/profil-section"
import StatisticWidget from "@/components/public/sections/statistic-widget"
import { useContent } from "@/hooks/useContent"

export default function Page() {

  const { sejarah } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>
        <ProfilSection profil={sejarah} />
        
        <div className="w-full lg:w-2/4 flex flex-col gap-4">
          <StatisticWidget />
        </div>
        
      </PageContent>

      <APBDSection/>

      <Footer />
    </div>
  )
}
