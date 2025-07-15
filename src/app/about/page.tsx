import React from 'react'
import Hero from '../about/v1/component/Hero'
import Video from '../about/v1/component/Video'
import Counter from '../about/v1/component/Counter'
import About from '../about/v1/component/About'
import Team from '../about/v1/component/Team'
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
        data-bs-theme="dark"
      />
      <main>
        <Hero />
        <Video />
        <Counter />
        <About />
        <Team />  
      </main>
      <Footer1 />
    </>
  )
}

export default page 