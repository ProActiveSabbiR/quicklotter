import { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import type { ReactNode } from 'react'


export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  url?: string
}

export type ServiceType = {
  icon?: ReactNode
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}

export type TestimonialType = {
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}


export type PartnerType = {
  icon: IconType
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type StatisticType = {
  title: string
  stat: number
  description?: string
  prefix?: string
  suffix?: string
}

export type FeatureType = {
  icon: IconType
  image?: StaticImageData
  title: string
  description?: string
}

export type PricingPlanType = {
  icon?: IconType
  badge?: string
  title?: string
  description?: string
  price: number
  features: FeatureType[]
  url?: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}


