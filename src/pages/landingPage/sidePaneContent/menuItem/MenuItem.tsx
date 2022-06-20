import { SiteMenuItem, SiteMenuList } from './MenuListData'
import { StyledLink } from './styles'

import SidebarMenuListItems from '../../../../composites/sidebarMenuListItems/SidebarMenuListItems'
import SidebarDrop from '../../../../composites/sidebarMenuDrop/SidebarDrop'
import React from 'react'
import { Fragment } from 'react'

interface ProfileMenuItemProps {
  isSideMenuOpen: boolean
}

export const ProfileMenuItem = (Props: ProfileMenuItemProps) => {
  const isMenuOpen = Props.isSideMenuOpen

  const profilerMenuList = SiteMenuList.filter(
    (item) => item.category === 'profile'
  )
  return (
    <>
      {profilerMenuList.map((item: SiteMenuItem) => {
        return (
          <Fragment key={item.id}>
            <SidebarMenuListItems
              icon={item.src}
              label={item.name}
              alt={item.alt}
              isMenuOpen={isMenuOpen}
            />
          </Fragment>
        )
      })}
    </>
  )
}

interface MenuItemProps {
  isSideMenuOpen: boolean
}

export const MenuItem = (Props: MenuItemProps) => {
  const isMenuOpen = Props.isSideMenuOpen

  const defaultMenuList = SiteMenuList.filter(
    (item) => item.category === 'default'
  )
  return (
    <>
      {defaultMenuList.map((item: SiteMenuItem) => {
        return (
          <React.Fragment key={item.id}>
            {item.hasSubMenu ? (
              <SidebarDrop
                icon={item.src}
                label={item.name}
                alt={item.alt}
                hasSubMenu={item.hasSubMenu}
                isMenuOpen={isMenuOpen}
                items={item.dropdownItem}
              />
            ) : (
              <StyledLink
                to={'/' + item.name?.toLowerCase().replace(/\s/g, '-')}
              >
                <SidebarMenuListItems
                  icon={item.src}
                  label={item.name}
                  alt={item.alt}
                  isMenuOpen={isMenuOpen}
                />
              </StyledLink>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

interface FooterMenuProps {
  isSideMenuOpen: boolean
}

export const FooterMenu = (Props: FooterMenuProps) => {
  const isMenuOPen = Props.isSideMenuOpen

  const footerMenuList = SiteMenuList.filter(
    (item) => item.id === 'Settings' || item.id === 'LogOut'
  )

  return (
    <>
      {footerMenuList.map((item: SiteMenuItem) => {
        return (
          <StyledLink
            to={'/' + item.name?.toLowerCase().replace(/\s/g, '-')}
            key={item.id}
          >
            <SidebarMenuListItems
              icon={item.src}
              label={item.name}
              alt={item.alt}
              isMenuOpen={isMenuOPen}
            />
          </StyledLink>
        )
      })}
    </>
  )
}
