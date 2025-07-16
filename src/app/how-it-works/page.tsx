import React from 'react'
import Hero from './components/hero'
import Feature from './components/feature'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Testimonials from '../home-page/components/Testimonials'
import FAQs from '../other-pages/faqs/components/FAQs'

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
        <div className='pt-6'></div>
        <Feature/>
        <Testimonials/>
        <FAQs />
      </main>
      <Footer1 />
    </>
  )
}

export default page