import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'
import MetaData from '@/components/MetaData'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cta from '@/components/Cta'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Expertise from '@/components/Expertise'
import Feature from '@/components/Feature'
import Projects from '@/components/Projects'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MetaData />
      <main className={`${jakarta.className}`}>
        <Header />
        <Hero />
        <About />
        <Feature />
        <Expertise />
        <Projects />
        <Cta />
        <Footer />
      </main>
    </>
  )
}
