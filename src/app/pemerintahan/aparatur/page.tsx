import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import PageContent from "@/components/template/simple/sections/page-content"
import StatisticWidget from "@/components/template/simple/sections/statistic-widget"
import { useContent } from "@/hooks/useContent"
import { AparaturComponent } from "./aparatur-componen"

export default function Page() {

  const { aparatur } = useContent()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>        
        <AparaturComponent data={aparatur} />

        <div className="w-full lg:w-2/8 flex flex-col gap-4">
          <StatisticWidget />
        </div>
        
      </PageContent>

      <APBDSection/>

      <Footer />
    </div>
  )
}
