import { Footer } from '@/components/template/simple/layout/Footer'
import { Header } from '@/components/template/simple/layout/Header'
import APBDSection from '@/components/template/simple/sections/apbd-section'
import PageContent from '@/components/template/simple/sections/page-content'
import React from 'react'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col">
          <Header />
          <PageContent>        
            <h2>Data Keluarga</h2>
            
          </PageContent>
    
          <APBDSection/>
    
          <Footer />
        </div>
  )
}