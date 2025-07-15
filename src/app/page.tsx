import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './home-page/components/Hero'
import About from './home-page/components/About'
import Steps from './home-page/components/Steps'
import Features from './home-page/components/Features'
import Pricing from './home-page/components/Pricing'
import Testimonials from './home-page/components/Testimonials'
import Clients from './home-page/components/Clients'

import Services from './home-page/components/Services'

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
        <Clients/>
        <About />
        <Steps />
        <Features />
        <Services />
        <Pricing />
        <Testimonials />
      </main>
      <Footer1 />
    </>
  )
}

export default page 