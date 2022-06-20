import styled from 'styled-components'
import { Colors } from '../../shared/styles'

export interface LabelProps {
  label: string
  text: string
}

export const WholeWidget = styled.div<LabelProps>`
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background: ${Colors.Gray05};
  border: 1px solid ${Colors.Gray30};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background-color: ${Colors.Gray05};
  min-height: 88px;
`

export const FirstLabelComponent = styled.div`
  padding: 4px 0px 8px 8px;
  display: flex;
  flex: 1;
`
export const SecondLabelComponent = styled.div`
  padding: 0px 0px 0px 8px;
  display: flex;
  flex: 1;
`
