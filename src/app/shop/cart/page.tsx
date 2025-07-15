import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import CartDetail from './components/CartDetail'
import Faqs from './components/Faqs'
import MainTitle from './components/MainTitle'

const page = () => {
  return (
    <>
      <TopNavigationBar showSearchInput showShoppingCart menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }} />
      <main>
        <MainTitle />
        <CartDetail />
        <Faqs />
      </main>
      <Footer1 />
    </>
  )
}

export default page
