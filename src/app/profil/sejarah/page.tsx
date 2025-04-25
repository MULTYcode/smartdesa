import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import PageContent from "@/components/template/simple/sections/page-content"
import ProfilSection from "@/components/template/simple/sections/profil-section"
import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
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
