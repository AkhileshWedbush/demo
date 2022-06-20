import styled from 'styled-components'
import { Backgrounds } from '../../shared/styles'

export interface DonutChartProps {
  legendLabels: string[]
  title: string
  dataValues: number[]
  bgColors: string[]
  borderColors: string[]
  borderWidth: number
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;

  background: conic-gradient(
    ${Backgrounds.Primary90} 0deg 80deg,
    ${Backgrounds.Primary70} 80deg 190deg,
    ${Backgrounds.Primary20} 190deg 360deg
  );
`

export const InnerWrapper = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background: ${Backgrounds.White};
`
