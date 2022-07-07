import { Fragment, useEffect, useState } from 'react'

import {
  SidebarDropProps,
  Wrapper,
  IconWrapper,
  StyledLabel,
  ChevronWrapper,
  StyledDropdownLinks,
  DropdownLink,
} from './styles'

import Image from '../../components/image/Image'
import Label from '../../components/label/Label'

/**
 * Creates a sidebar dropdown components with customizable background color and icon.
 */
const SidebarDrop = ({
  bgColor,
  label,
  color,
  icon,
  isMenuOpen,
  hasSubMenu,
  alt,
  items,
}: SidebarDropProps) => {
  const [clicked, setClicked] = useState(false)
  useEffect(()=>{
    if(isMenuOpen === false){
      setClicked(false)
    }
  }, [isMenuOpen])
  console.log(isMenuOpen)

  const toggle = () =>{
    
      if (isMenuOpen === true)
      {
        return (setClicked(!clicked))
      }
    
  }

  return (
    <>
      <Wrapper
        bgColor={bgColor}
        color={color}
        hasSubMenu={hasSubMenu}
        onClick={() => toggle()}
        clicked={clicked}
      >
        <IconWrapper>
          <Image image={icon} alt={alt}></Image>
        </IconWrapper>
        {isMenuOpen && (
          <Fragment>
            <StyledLabel>
              <Label
                fontSize={'1rem'}
                fontStyle={'regular'}
                lineHeight={'1.5rem'}
                fontWeight={700}
                color={''}
                label={label}
              />
            </StyledLabel>
            <ChevronWrapper>
              <Image
                image={require('../../assets/icons/size16/Chevrondown.png')}
                alt={'Chevron icon'}
              />
            </ChevronWrapper>
          </Fragment>
        )}
      </Wrapper>
      {clicked && (
        <StyledDropdownLinks>
          {items?.map((item, index) => (
            <DropdownLink
              to={'/' + item.routeTitle.toLowerCase().replace(/\s/g, '-')}
              target={item.openAtNewTab ? "_blank" : ""}
              key={index}
            >
              <Label
                fontSize={'1rem'}
                fontStyle={'regular'}
                lineHeight={'1.5rem'}
                fontWeight={400}
                color={''}
                label={item.routeTitle}
              />
            </DropdownLink>
          ))}
        </StyledDropdownLinks>
      )}
    </>
  )
}

export default SidebarDrop
