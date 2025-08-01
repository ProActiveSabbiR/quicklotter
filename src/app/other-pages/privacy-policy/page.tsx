// src/app/other-pages/privacy-policy/page.tsx
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'
import CTA from './components/CTA'

const PrivacyPolicy = () => {
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
        <Details />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default PrivacyPolicy
