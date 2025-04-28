import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"
import APBDSection from "@/components/template/simple/sections/apbd-section"
import PageContent from "@/components/template/simple/sections/page-content"

export default function Page() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent>

        <div>
            <h1>page is undercontruction</h1>
        </div>
        
        {/* <div className="w-full lg:w-2/4 flex flex-col gap-4">
          <StatisticWidget />
        </div> */}
        
      </PageContent>

      <APBDSection/>

      <Footer />
    </div>
  )
}
