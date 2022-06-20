import styled from 'styled-components'
import { BorderColors, Backgrounds, Colors } from '../../shared/styles'

export interface TextareaProps {
  placeholder: string
  onChange?: (e: any) => void
  type: string
  onBlur?: () => any
  ref?: any
  value?: any
  border?: string
}

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 8px;
`

export const StyledTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  flex: 0 1 100%;
  background: ${Backgrounds.White};
  border: 1px solid ${BorderColors.Gray50};
  &:hover {
    border: 1px solid ${BorderColors.Primary5};
    color: ${Colors.Gray20};
  }
  &:active {
    border: 1px solid ${BorderColors.Primary60};
  }
  &:disabled {
    border: 1px solid ${BorderColors.Gray50};
    color: ${Colors.Gray};
  }
  &:focus {
    border: 2px solid ${BorderColors.Primary30};
    // color: ${Backgrounds.Gray20};
  }
  box-sizing: border-box;
  border-radius: 8px;
  font-family: SourceSansPro-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #0f172a;
`
