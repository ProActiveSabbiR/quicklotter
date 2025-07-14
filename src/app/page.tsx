import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer7 from '@/components/footer/Footer7'
import Hero from './demos/mobileapp/components/Hero'
import About from './demos/mobileapp/components/About'
import Steps from './demos/mobileapp/components/Steps'
import Features from './demos/mobileapp/components/Features'
import Pricing from './demos/mobileapp/components/Pricing'
import Testimonials from './demos/mobileapp/components/Testimonials'
import CTA from './demos/mobileapp/components/CTA'

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