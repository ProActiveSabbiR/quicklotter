import { bulbIcon, robotIcon, technologyIcon, wifiIcon } from '@/assets/data/icons'
import type { FeatureType, StatisticType, MemberType } from './types'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'

export const statData: StatisticType[] = [
  {
    title: 'Happy Players',
    stat: 60000,
    suffix: '+',
  },
  {
    title: 'Games Generated',
    stat: 10000,
    suffix: '+',
  },
  {
    title: 'Positive Reviews',
    stat: 2000,
    suffix: '+',
  },
  {
    title: 'Lottery Games Supported',
    stat: 50,
    suffix: '+',
  },
]

export const features: FeatureType[] = [
  {
    title: 'Innovation-driven',
    icon: robotIcon,
    description: 'Our unique technology helps you play smarter, not harder.',
  },
  {
    title: 'Transparent approach',
    icon: bulbIcon,
    description: "Fair play, honest results, and no surprises for players.",
  },
  {
    title: 'Accessible for everyone',
    icon: technologyIcon,
    description: 'Enjoy Quick Lotter anywhere, anytime, on any device.',
  },
  {
    title: 'Community-driven',
    icon: wifiIcon,
    description: 'The best lottery experience comes from listening to real players.',
  },
]

export const teamMembers: MemberType[] = [
  {
    name: 'Samuel Bishop',
    role: 'UI/UX Designer',
    image: avatar4,
  },
  {
    name: 'Judy Nguyen',
    role: 'Web Designer',
    image: avatar11,
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: avatar6,
  },
  {
    name: 'Dennis Barrett',
    role: 'CEO & Founder',
    image: avatar5,
  },
  {
    name: 'Bryan Knight',
    role: 'Product Designer',
    image: avatar10,
  },
]
