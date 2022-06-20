import { Main, Wrapper } from './styles'
interface TextboxProps {
  backgroundColor?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  value?: string
  max?:string
  min?:string
  onChange?: (e: any) => void
  ref?: any
  onBlur?: () => any
}
export const Textbox = ({
  disabled,
  min,
  max,
  type = 'text',
  backgroundColor,
  placeholder,
  value,
  onChange,
}: TextboxProps) => {
  return (
    <Wrapper>
      <Main
        max={max}
        min={min}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        onChange={onChange}
      ></Main>
    </Wrapper>
  )
}
