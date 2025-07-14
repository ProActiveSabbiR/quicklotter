import Footer1 from '@/components/footer/Footer1'
import ActionBox from '../other-pages/faqs/components/ActionBox'
import FAQs from '../other-pages/faqs/components/FAQs'
import Hero from '../other-pages/faqs/components/Hero'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const FAQPage = () => {
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
        <FAQs />
        <ActionBox />
      </main>

      <Footer1 />
    </>
  )
}

export default FAQPage 