import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Collapse } from 'react-bootstrap'
import { getAppMenuItems } from '@/helpers/menu'

const AppMenu = ({ mobileMenuOpen, ulClassName }: { mobileMenuOpen: boolean; ulClassName?: string }) => {
  const pathname = usePathname()
  const menuItems = getAppMenuItems()

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>
          {menuItems.map((item) => (
            <li key={item.key} className="nav-item">
              <Link
                href={item.url ?? '#'}
                className={`nav-link${pathname === item.url ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
