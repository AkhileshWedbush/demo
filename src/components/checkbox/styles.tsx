import styled from 'styled-components'

import { Colors, Backgrounds, BorderColors } from '../../shared/styles'
export interface CheckboxProps {
  bgColor?: string
  title?: string
  checkBoxId?: string
  disabled?: boolean
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledCheckbox = styled.input<CheckboxProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  margin: 0rem 0.625rem;
  background-color: ${(props: CheckboxProps) => props.bgColor}
  border: 0.0625rem solid ${BorderColors.Gray30};

  &:disabled{
    background: #E2E8F0;
  border-radius: 4px;
  }
`
export const StyledLabel = styled.label<CheckboxProps>`
  &:disabled {
    color: #a7afbc;
  }
`
