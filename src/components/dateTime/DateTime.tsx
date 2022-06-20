import React from 'react'
import { DateWrapper } from './styles'

const DateTime = () => {
  const date = new Date()
  const currentDate = date.toLocaleString()
  return <DateWrapper>{currentDate}</DateWrapper>
}

export default DateTime
