import { Footer } from "@/components/template/simple/layout/Footer"
import { Header } from "@/components/template/simple/layout/Header"

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* <NewsSection news={news} /> */}
      </main>
      <Footer />
    </div>
  )
}
