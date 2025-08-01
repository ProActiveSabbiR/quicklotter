'use client'
import LogoBox from '@/components/LogoBox'
import AppMenu from '@/components/topbar/AppMenu/page'
import StickyHeader from '@/components/topbar/AppMenu/StickyHeader'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import useToggle from '@/hooks/useToggle'
import { buyLink } from '@/states/constants'
import Link from 'next/link'
import { Suspense, type ReactNode } from 'react'
import { Button, Container, type ButtonProps } from 'react-bootstrap'
import { BsPersonCircle } from 'react-icons/bs'
import FloatingSearch from './FloatingSearch'
import SearchInput from './SearchInput'
import ShoppingCartOffcanvas from './ShoppingCartOffcanvas'
import ThemeToggleDropdown from './ThemeToggleDropdown'

type TopNavigationBarProps = {
  containerFluid?: boolean
  showBuyNow?: boolean
  showSearchInput?: boolean
  showFloatingSearch?: boolean
  hideThemeToggler?: boolean
  darkButton?: { text: string; size?: ButtonProps['size'] }
  navClassName?: string
  menuProps?: any
  children?: ReactNode
}

const TopNavigationBar = ({
  showBuyNow,
  showSearchInput,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
  menuProps,
  containerFluid,
  children,
  ...props
}: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200)

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>
          <LogoBox className="me-0" />

          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">
            <Suspense>{!hideThemeToggler && <ThemeToggleDropdown />}</Suspense>

            {/* Single Sign In link with icon */}
            <li className="nav-item d-none d-sm-block">
              <Link href="/auth/sign-in" className="nav-link">
                <BsPersonCircle className="me-1" />
                Sign in
              </Link>
            </li>
            <Suspense>
              <ShoppingCartOffcanvas />
            </Suspense>

            {showBuyNow && (
              <li className="nav-item d-none d-sm-block">
                <Link href={buyLink} target="_blank" className="btn btn-sm btn-primary mb-0">
                  Buy now!
                </Link>
              </li>
            )}

            {showFloatingSearch && (
              <Suspense>
                <FloatingSearch />
              </Suspense>
            )}

            {darkButton && (
              <li className="nav-item d-none d-sm-block ms-2">
                <Button variant="dark" size={darkButton.size} className="btn mb-0">
                  {darkButton.text}
                </Button>
              </li>
            )}

            {showSearchInput && (
              <Suspense>
                <SearchInput />
              </Suspense>
            )}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </Container>
      </nav>
    </StickyHeader>
  )
}

export default TopNavigationBar
