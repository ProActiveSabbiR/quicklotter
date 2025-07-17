import { BsDribbble, BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import type { FollowUsType, LocationType, WorkType } from './types'
import californiaImg from '@/assets/images/lottery/cf.png'
import texasImg from '@/assets/images/lottery/tx.png'
import floridaImg from '@/assets/images/lottery/fl.png'
import usflagImg from '@/assets/images/flags/us.svg'
import brazilflagImg from '@/assets/images/flags/br.svg'

export const followUsIcons: FollowUsType[] = [
  {
    icon: BsFacebook,
    variant: 'text-facebook',
  },
  {
    icon: BsInstagram,
    variant: 'text-instagram',
  },
  {
    icon: BsDribbble,
    variant: 'text-dribbble',
  },
  {
    icon: BsTwitter,
    variant: 'text-twitter',
  },
  {
    icon: BsYoutube,
    variant: 'text-youtube',
  },
]

export const works: WorkType[] = [
  {
    image: californiaImg,
    title: 'California',
    description: 'Launching soon — get ready to play smarter in the Golden State!',
  },
  {
    image: texasImg,
    title: 'Texas',
    description: 'Launching soon — the smartest way to play the Texas Lottery is coming!',
  },
  {
    image: floridaImg,
    title: 'Florida',
    description: 'Launching soon — Quick Lotter will transform the way Florida plays!',
  },
]

export const locations: LocationType[] = [
  {
    countryName: 'United States',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: ' +1-800-QUICKLOT (Toll-free)',
    image: usflagImg,
  },
  {
    countryName: 'Brazil',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: ' +1-800-QUICKLOT (Toll-free)',
    image: brazilflagImg,
  },
]
