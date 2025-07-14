import type { MegaMenuType, MenuItemType, ResourceMenuType } from '@/types/menu'
import {
  BsBasket,
  BsBell,
  BsBlockquoteRight,
  BsBoxes,
  BsBriefcase,
  BsBullseye,
  BsCalendar3Week,
  BsChatLeft,
  BsEmojiSunglasses,
  BsEnvelope,
  BsFileEarmarkText,
  BsFileText,
  BsHeart,
  BsLock,
  BsMask,
  BsPerson,
  BsQuestionCircle,
  BsRocket,
  BsShieldLock,
  BsStar,
  BsStickies,
  BsTrash,
  BsWallet,
} from 'react-icons/bs'

import blog2Img from '@/assets/images/blog/02.jpg'
import blogImg1 from '@/assets/images/blog/4by4/01.jpg'
import blogImg2 from '@/assets/images/blog/4by4/02.jpg'
import blogImg3 from '@/assets/images/blog/4by4/03.jpg'
import mailchimpImg from '@/assets/images/elements/mailchimp.svg'
import redditImg from '@/assets/images/elements/reddit.svg'
import slackImg from '@/assets/images/elements/slack.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'

export const ACCOUNT_VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'profile',
    label: 'My Profile',
    url: '/account/profile',
    parentKey: 'pages-account',
    icon: BsPerson,
  },
  {
    key: 'account-security',
    label: 'Security',
    url: '/account/security',
    parentKey: 'pages-account',
    icon: BsShieldLock,
  },
  {
    key: 'account-notifications',
    label: 'Notifications',
    url: '/account/notifications',
    parentKey: 'pages-account',
    icon: BsBell,
  },
  {
    key: 'account-projects',
    label: 'My Projects',
    url: '/account/projects',
    parentKey: 'pages-account',
    icon: BsBriefcase,
  },
  {
    key: 'account-payment-details',
    label: 'Payment Details',
    url: '/account/payment-details',
    parentKey: 'pages-account',
    icon: BsWallet,
  },
  {
    key: 'account-order-history',
    label: 'Order History',
    url: '/account/order-history',
    parentKey: 'pages-account',
    icon: BsBasket,
  },
  {
    key: 'account-wishlist',
    label: 'Wishlist',
    url: '/account/wishlist',
    parentKey: 'pages-account',
    icon: BsHeart,
  },
  {
    key: 'account-delete-profile',
    label: 'Delete Profile',
    url: '/account/delete-profile',
    parentKey: 'pages-account',
    icon: BsTrash,
  },
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
  },
  {
    key: 'pricing',
    label: 'Pricing',
    url: '/pricing',
  },
  {
    key: 'how-it-works',
    label: 'How it works',
    url: '/integrations',
  },
  {
    key: 'about',
    label: 'About',
    url: '/about',
  },
  {
    key: 'faq',
    label: 'FAQ',
    url: '/faqs',
  },
]

export const MEGA_MENU_ITEMS: MegaMenuType = {
  usefulLinks: ['Market Research', 'Advertising', 'Consumer behavior', 'Digital marketing', 'Marketing ethics', 'Social media marketing'],
  company: [
    {
      icon: BsBoxes,
      title: 'About us',
      description: 'Learn about our story, our mission statement and roadmap.',
    },
    {
      icon: BsRocket,
      title: 'Career',
      badge: '3 Jobs',
      description: "We're always looking for talented people. Join our team!",
    },
    {
      icon: BsEmojiSunglasses,
      title: 'Customer stories',
      description: 'Learn how our customer are making big changes to their tech stack',
    },
  ],
  integration: [
    {
      logo: slackImg,
      name: 'Slack',
    },
    {
      logo: webflowImg,
      name: 'Webflow',
    },
    {
      logo: mailchimpImg,
      name: 'Mailchimp',
    },
    {
      logo: redditImg,
      name: 'Reddit',
    },
  ],
  recentBlogs: [
    {
      image: blogImg2,
      title: '10 things you need to know about Mizzle',
      link: '/blog/single/v1',
    },
    {
      image: blogImg1,
      title: 'The Power of Gratitude: Cultivating Joy and Abundance',
      link: '/blog/single/v2',
    },
    {
      image: blogImg3,
      title: 'Effortless Web Development with Mizzle',
      link: '/blog/single/v1',
    },
  ],
}

export const RESOURCES_MENU_ITEMS: ResourceMenuType = {
  usefulLinks: [
    { icon: BsFileText, name: 'Guides' },
    { icon: BsChatLeft, name: 'Supports' },
    { icon: BsCalendar3Week, name: 'Community & events' },
    { icon: BsBlockquoteRight, name: 'Blogs' },
    { icon: BsLock, name: 'Security' },
    { icon: BsStar, name: 'Tutorials' },
    { icon: BsQuestionCircle, name: 'Help center' },
    { icon: BsEnvelope, name: 'Developer newsletter' },
  ],
  keyFeatures: [
    {
      title: 'Documentation',
      description: 'Using documentation you can easily develop projects',
      icon: BsFileEarmarkText,
    },
    {
      title: 'Snippets',
      description: 'Development guides for building projects with Mizzle',
      icon: BsStickies,
    },
    {
      title: 'Changelog',
      description: 'Recent feature release and announcement. See how changes are made.',
      icon: BsBullseye,
    },
    {
      title: 'Playwright tips',
      description: 'Tips and In-depth guide for headless browser automation',
      icon: BsMask,
    },
  ],
  featureResource: {
    title: 'Featured title here',
    description: 'Departure defective arranging rapturous did believe him all had supported.',
    image: blog2Img,
  },
}
