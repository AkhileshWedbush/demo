import { Icons } from '../../../../shared/GlobalStyle'

interface DropdownItem {
  routeTitle: string
  openAtNewTab: boolean
}
export interface SiteMenuItem {
  id: string
  name: string
  src: string
  alt: string
  category: string
  hasSubMenu: boolean
  dropdownItem: DropdownItem[]
}

export const SiteMenuList = [

  {
    id: 'Settlement',
    name: 'Settlement',
    src: Icons.Document,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: true,
    dropdownItem: [
      {routeTitle: 'BetaFailTracking', openAtNewTab: false},
      {routeTitle: 'P3 FailTracking', openAtNewTab: false},
    ],
  },
 
  {
    id: 'LogOut',
    name: 'LogOut',
    src: Icons.LogOut,
    alt: 'Log out icon',
    category: 'action',
    hasSubMenu: false,
    dropdownItem: [],
  },
]
