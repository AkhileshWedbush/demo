import { Wrapper, StyledCheckbox, CheckboxProps, StyledLabel } from './styles'

const Checkbox = ({ bgColor, title, checkBoxId, disabled }: CheckboxProps) => {
  return (
    <Wrapper>
      <StyledCheckbox
        bgColor={bgColor}
        type={'checkbox'}
        id={checkBoxId}
        disabled={disabled}
      />

      {title && <StyledLabel htmlFor={checkBoxId}>{title}</StyledLabel>}
    </Wrapper>
  )
}

export default Checkbox
