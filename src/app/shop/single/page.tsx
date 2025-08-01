import React from 'react'
import Hero from './components/Hero'
import Specification from './components/Specification'
import RatingAndReview from './components/RatingAndReview'
import SimilarProducts from './components/SimilarProducts'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }}
        darkButton={{ text: 'Get Application!', size: 'sm' }}
      />

      <main>
        <Hero />

        <Specification />

        <RatingAndReview />

        <SimilarProducts />
      </main>

              <Footer1 />
    </>
  )
}

export default page
