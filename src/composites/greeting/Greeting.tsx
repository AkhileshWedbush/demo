import React from 'react'

import DateTime from '../../components/dateTime/DateTime'
import Label from '../../components/label/Label'
import { Backgrounds, Colors } from '../../shared/styles'

import {
  Wrapper,
  Heading,
  SubHeading,
  DateHeading,
  DateContainer,
} from './styles'

interface GreetingProps {
  userName?: string
}

export const Greeting = ({ userName }: GreetingProps) => {
  return (
    <Wrapper>
      <Heading>
        <Label
          fontSize={'1.675rem'}
          color={Backgrounds.Brand3}
          fontWeight={700}
          fontStyle={'normal'}
          lineHeight={'3rem'}
          label={'Good Morning, ' + userName}
        />
      </Heading>
      <DateContainer>
        <SubHeading>
          <Label
            fontSize={'1.25rem'}
            color={Colors.Black}
            fontWeight={700}
            fontStyle={'normal'}
            lineHeight={'3rem'}
            label={'Your HouseHold Summary'}
          />
        </SubHeading>

        <DateHeading>
          <span>As of </span> <DateTime />
        </DateHeading>
      </DateContainer>
    </Wrapper>
  )
}
