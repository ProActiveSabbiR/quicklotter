import { NavbarBrand } from 'react-bootstrap'
import quickLotterLogo from '@/assets/images/quick lotter official-logo.png'
import logoSmall from '@/assets/images/quick lotter official-logo.png'
import Image from 'next/image'
import Link from 'next/link'

type LogoBoxProps = {
  className?: string
  smallIcon?: boolean
  imageClassName?: string
}

const LogoBox = ({ className, smallIcon, imageClassName }: LogoBoxProps) => {
  return smallIcon ? (
    <Image src={logoSmall} className={className ?? ''} alt="logo"  />
  ) : (
    <NavbarBrand as={Link} className={className ?? ''} href="">
      <Image className={`h-60px ${imageClassName ?? ''} `} src={quickLotterLogo} alt="Quick Lotter Logo"  />
    </NavbarBrand>
  )
}

export default LogoBox
