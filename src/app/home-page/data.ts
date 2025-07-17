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
    title: 'Game analysis',
    description: "Discover hidden patterns and stats to improve your lottery strategy.",
    icon: businessIcon,
  },
  {
    title: 'Game planning',
    description: 'Discover hidden patterns and stats to improve your lottery strategy.',
    icon: strategicIcon,
  },
  {
    title: 'Winning strategy',
    description: "Use advanced filters and expert tips to boost your odds and maximize every ticket.",
    icon: marketingIcon,
  },
  {
    title: 'User experience',
    description: 'Seamless design for generating, checking, and printing tickets with ease.',
    icon: designIcon,
  },
  {
    title: 'Premium support',
    description: 'Get fast, personalized support whenever you need help.',
    icon: businessIcon2,
  },
  {
    title: 'Subscription management',
    description: "Choose your plan, manage payments, and focus on playing—leave the rest to us.",
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
    comment: "Quick Lotter made my lottery experience so much smarter! I love the automatic game generation and real-time analysis. Now I only play the best numbers!",
    rating: 5,
  },
  {
    user: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    comment:
      "With Quick Lotter, I finally understand my odds! The analysis tools are so clear, and printing my tickets at home is just brilliant. Highly recommend for anyone who takes lottery seriously.",
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar3,
      firstName: 'Larry',
      lastName: 'Lawson',
    },
    comment: "I always struggled to choose numbers, but Quick Lotter's AI suggestions and filters made everything easier. I can generate, analyze, and print in seconds!",
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    comment: "Using Quick Lotter is fun and easy. The overview feature helps me track all my games, and the ticket checker is spot on. It’s saved me a lot of time!"
,
    rating: 5,
  },
  {
    user: {
      avatar: avatar7,
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
    comment:
      "I finally won a small prize thanks to Quick Lotter’s filters and smart combos! The ability to print tickets and check results instantly is a game changer."
,
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar10,
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    comment: "I’m really happy with Quick Lotter. Managing my favorite games, generating tickets, and analyzing draws – all in one place! This is the best lottery tool I’ve tried."
,
    rating: 5,
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    comment: "Before Quick Lotter, I wasted a lot of time at the store. Now I generate and print my tickets at home. The statistics and history features are super helpful!"
,
    rating: 5,
  },
  {
    user: {
      avatar: avatar11,
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    comment: "The ticket generator is so convenient! I can try different combinations, use smart filters, and print perfect playslips every time. Love it!"
,
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    comment:
      "Quick Lotter is simple, powerful, and fast. Their support is also amazing. I never miss a drawing anymore!"
,
    rating: 4,
  },
]
