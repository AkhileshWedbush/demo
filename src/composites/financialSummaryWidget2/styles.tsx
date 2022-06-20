import styled from 'styled-components'
import { Colors } from '../../shared/styles'

export interface LabelProps {
  label: string
  text: string
  text1: string
}

export const WholeWidget1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background: ${Colors.Gray05};
  border: 1px solid ${Colors.Gray30};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  min-height: 88px;
`

export const UpperLabel = styled.div`
  // padding: 4px 0px 8px 8px;
`
export const WholeWrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  // gap: 8px;
`
export const FirstWrapperLabel = styled.div`
  flex: 1;
  // padding: 4px 0px 0px 8px;
`

export const SecondWrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0px;
  gap: 4px;
`
export const GainPercentage = styled.div`
`
export const IconWrapper = styled.div`
  display: flex;
  transform: matrix(1, 0, 0, 1, 0, 0);
`
