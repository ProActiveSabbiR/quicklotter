import { BsAndroid, BsApple, BsGit, BsGoogle, BsSlack, BsCheckLg } from 'react-icons/bs'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'

import { businessIcon, businessIcon2, designIcon, marketingIcon, strategicIcon, taxIcon } from '@/assets/data/icons'
import { UserType } from '@/types/user'
import { PartnerType, PricingType, StatisticType, ClientType, ServiceType, TestimonialType } from './types'

export const clientData: ClientType[] = [
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
]




export const partners: PartnerType[] = [{ icon: BsAndroid }, { icon: BsApple }, { icon: BsSlack }, { icon: BsGoogle }, { icon: BsGit }]

export const statData: StatisticType[] = [
  {
    title: 'Total Downloads',
    stat: 15,
    suffix: 'M+',
  },
  {
    title: 'Total Followers',
    stat: 22,
    suffix: 'M+',
  },
  {
    title: 'Total Reviews',
    stat: 2300,
    suffix: '+',
  },
  {
    title: 'Total Countries',
    stat: 107,
    suffix: '+',
  },
]


export const services: ServiceType[] = [
  {
    title: 'Business analysis',
    description: "Our Business Analysis service is the first step in understanding your organization's current state.",
    icon: businessIcon,
  },
  {
    title: 'Strategic planning',
    description: 'We work closely with you to develop a tailored roadmap that aligns with your goals and objectives.',
    icon: strategicIcon,
  },
  {
    title: 'Marketing strategy',
    description: "Our Marketing Strategy service is designed to elevate your brand's visibility and engagement.",
    icon: marketingIcon,
  },
  {
    title: 'Experience design',
    description: 'From website design to app development, we blend aesthetics with usability to leave a lasting impression.',
    icon: designIcon,
  },
  {
    title: 'Business consulting',
    description: 'Our consultants become your trusted advisors on the path to success.',
    icon: businessIcon2,
  },
  {
    title: 'Tax consultant',
    description: "We're here to optimize your tax strategy, so you can focus on what matters most to your business.",
    icon: taxIcon,
  },
]

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        badge: 'Boss Mode',
        price: 45,
        features: [
          { icon: BsCheckLg, title: 'Up to 05 users monthly' },
          { icon: BsCheckLg, title: 'Free 5 host domain' },
          { icon: BsCheckLg, title: 'Google docs style editors' },
          { icon: BsCheckLg, title: 'Support for 30+ languages' },
          { icon: BsCheckLg, title: 'Landing pages Web widgets' },
          { icon: BsCheckLg, title: '24/7 dedicated Support' },
        ],
      },
      {
        badge: 'Enterprise Mode',
        price: 175,
        features: [
          { icon: BsCheckLg, title: 'Up to 05 users monthly' },
          { icon: BsCheckLg, title: 'Free 5 host domain' },
          { icon: BsCheckLg, title: 'Google docs style editors' },
          { icon: BsCheckLg, title: 'Support for 30+ languages' },
          { icon: BsCheckLg, title: 'Landing pages Web widgets' },
          { icon: BsCheckLg, title: '24/7 dedicated Support' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        badge: 'Boss Mode',
        price: 56,
        features: [
          { icon: BsCheckLg, title: 'Up to 05 users monthly' },
          { icon: BsCheckLg, title: 'Free 5 host domain' },
          { icon: BsCheckLg, title: 'Google docs style editors' },
          { icon: BsCheckLg, title: 'Support for 30+ languages' },
          { icon: BsCheckLg, title: 'Landing pages Web widgets' },
          { icon: BsCheckLg, title: '24/7 dedicated Support' },
        ],
      },
      {
        badge: 'Enterprise Mode',
        price: 199,
        features: [
          { icon: BsCheckLg, title: 'Up to 05 users monthly' },
          { icon: BsCheckLg, title: 'Free 5 host domain' },
          { icon: BsCheckLg, title: 'Google docs style editors' },
          { icon: BsCheckLg, title: 'Support for 30+ languages' },
          { icon: BsCheckLg, title: 'Landing pages Web widgets' },
          { icon: BsCheckLg, title: '24/7 dedicated Support' },
        ],
      },
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar1,
      firstName: 'Billy',
      lastName: 'Vasquez',
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5,
  },
  {
    user: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    comment:
      "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing we've just launched our 5th website! You guys rock!",
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar3,
      firstName: 'Larry',
      lastName: 'Lawson',
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    comment: 'The experience of using Mizzle was enjoyable and easy. Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5,
  },
  {
    user: {
      avatar: avatar7,
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
    comment:
      "I'm really happy with the Mizzle service. we've just launched our 5th website - they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock",
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar10,
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    comment: "I am really satisfied with my service. Thanks to service, we've just launched our 5th website! You guys rock!",
    rating: 5,
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5,
  },
  {
    user: {
      avatar: avatar11,
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    comment: 'I am really satisfied with my service. You guys rock!',
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    comment:
      "We've just launched our 5th website - they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock",
    rating: 4,
  },
]
