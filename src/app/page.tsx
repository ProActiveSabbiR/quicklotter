import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer7 from '@/components/footer/Footer7'
import Hero from './home-page/components/Hero'
import About from './home-page/components/About'
import Steps from './home-page/components/Steps'
import Features from './home-page/components/Features'
import Pricing from './home-page/components/Pricing'
import Testimonials from './home-page/components/Testimonials'
import CTA from './home-page/components/CTA'

import React from 'react'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto',
        }}
        darkButton={{ text: 'Get Application!', size: 'sm' }}
      />
      <main>
        <Hero />
        <About />
        <Steps />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer7 />
    </>
  )
}

export default page 