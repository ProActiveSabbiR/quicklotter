import React from 'react'
import Hero from './components/Hero'
import IntegrationGrid from './components/IntegrationGrid'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

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
        <IntegrationGrid />
      </main>
      <Footer1 />
    </>
  )
}

export default page 