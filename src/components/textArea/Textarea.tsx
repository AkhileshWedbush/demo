import { TextareaProps, Wrapper, StyledTextarea } from './styles'

export const Textarea = ({
  placeholder,
  onChange,
  type,
  value,
  ref,
  onBlur,
  border,
}: TextareaProps) => {
  return (
    <Wrapper>
      <StyledTextarea
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
        border={border}
      />
    </Wrapper>
  )
}
