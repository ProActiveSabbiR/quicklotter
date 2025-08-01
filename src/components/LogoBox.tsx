import { NavbarBrand } from 'react-bootstrap'
import quickLotterLogo from '@/assets/images/quick_lotter_logo.svg'
import logoSmall from '@/assets/images/logo-icon.svg'
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
      <Image className={`h-40px ${imageClassName ?? ''} `} src={quickLotterLogo} alt="Quick Lotter Logo" width={119} height={40} />
    </NavbarBrand>
  )
}

export default LogoBox
