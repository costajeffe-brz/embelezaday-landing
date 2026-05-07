import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Problems } from '@/components/sections/Problems'
import { Demo } from '@/components/sections/Demo'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { HomepageStructuredData } from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Demo />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <HomepageStructuredData />
    </>
  )
}
