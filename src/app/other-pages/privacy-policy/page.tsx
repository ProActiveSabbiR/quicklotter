import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'


const TermsNConditions = () => {
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
  <CTA /> {import CTA from './components/CTA'}
</main>


      <Footer1 />
    </>
  )
}

export default TermsNConditions
