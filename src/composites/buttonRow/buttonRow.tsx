import React from 'react'
import './styles.tsx'
import { ButtonRowProps, Container, Item1, Item2, Item3 } from './styles'
import Button from '../../components/button/Button'
import { Backgrounds } from '../../shared/styles'
import { Icons } from '../../shared/GlobalStyle'

export const ButtonRow = ({ ...props }: ButtonRowProps) => {
  return (
    <Container>
      {/* <Item1> */}
      <Button
        bgColor={Backgrounds.White}
        color={Backgrounds.Primary50}
        title={'Holdings'}
        borderColor={Backgrounds.Primary50}       />
      {/* </Item1> */}
      {/* <Item2> */}
      <Button
        bgColor={Backgrounds.White}
        color={Backgrounds.Primary50}
        title={'Activity'}
        borderColor={Backgrounds.Primary50}      />
      {/* </Item2> */}
      {/* <Item3> */}
      <Button
        bgColor={Backgrounds.White}
        color={Backgrounds.Primary50}
        title={'More'}
        borderColor={Backgrounds.Primary50}    // image={Icons.ChevronDown}
      />
      {/* </Item3> */}
    </Container>
  )
}
