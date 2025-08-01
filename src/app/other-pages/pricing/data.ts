import { BsCheckLg, BsClock, BsGraphUpArrow, BsHeadset, BsLightningChargeFill, BsRocketTakeoffFill, BsSendFill } from 'react-icons/bs'

import client5 from '@/assets/images/client/05.svg'
import client1 from '@/assets/images/client/01.svg'
import client7 from '@/assets/images/client/07.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client6 from '@/assets/images/client/06.svg'

import { FeatureType, PricingType, ClientType, FaqType } from './types'

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        icon: BsLightningChargeFill,
        title: 'Starter',
        price: 12.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
        ],
      },
      {
        icon: BsRocketTakeoffFill,
        title: 'Pro',
        isPopular: true,
        price: 19.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'AI Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'AI FIlters (SmartFIlter)' },
          { icon: BsCheckLg, title: 'Advanced Analysis' },
          { icon: BsCheckLg, title: 'Overview Insights' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
          { icon: BsCheckLg, title: 'Dedicated Support' },
        ],
      },
      {
        icon: BsSendFill,
        title: 'Unlimited',
        price: 35.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'AI Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'AI FIlters (SmartFIlter)' },
          { icon: BsCheckLg, title: 'Advanced Analysis' },
          { icon: BsCheckLg, title: 'Overview Insights' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
          { icon: BsCheckLg, title: 'Dedicated Support' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        icon: BsLightningChargeFill,
        title: 'Boss Plan',
        price: 49.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
        ],
      },
      {
        icon: BsRocketTakeoffFill,
        title: 'Standard Plan',
        isPopular: true,
        price: 79.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'AI Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'AI FIlters (SmartFIlter)' },
          { icon: BsCheckLg, title: 'Advanced Analysis' },
          { icon: BsCheckLg, title: 'Overview Insights' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
          { icon: BsCheckLg, title: 'Dedicated Support' },
        ],
      },
      {
        icon: BsSendFill,
        title: 'Enterprise Plan',
        price: 99.99,
        features: [
          { icon: BsCheckLg, title: 'Smart Game Generation' },
          { icon: BsCheckLg, title: 'AI Game Generation' },
          { icon: BsCheckLg, title: 'Manual Filters' },
          { icon: BsCheckLg, title: 'AI FIlters (SmartFIlter)' },
          { icon: BsCheckLg, title: 'Advanced Analysis' },
          { icon: BsCheckLg, title: 'Overview Insights' },
          { icon: BsCheckLg, title: 'Saved Games' },
          { icon: BsCheckLg, title: 'Mobile & web Access' },
          { icon: BsCheckLg, title: 'Ticket Printing Limit' },
          { icon: BsCheckLg, title: 'Ticket Checker' },
          { icon: BsCheckLg, title: 'Dedicated Support' },
        ],
      },
    ],
  },
]

export const features: FeatureType[] = [
  {
    icon: BsClock,
    title: 'Get started in a minutes',
    description: "We’ve made it effortless so you can focus on what really matters: your lottery plays.",
  },
  {
    icon: BsGraphUpArrow,
    title: 'Optimize your chances',
    description: 'Experience the full power of lottery optimization for smarter, more strategic games.',
  },
  {
    icon: BsHeadset,
    title: '24/7 customer supports',
    description: 'Our dedicated support team is here for your questions, any time you need help.',
  },
]

export const clients: ClientType[] = [
  { image: client5 },
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client6 },
  { image: client7 },
]

export const faqData: FaqType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.',
  },
  {
    question: 'Can you describe mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
]
