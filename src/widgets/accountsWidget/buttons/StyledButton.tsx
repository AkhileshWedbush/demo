import { FC } from 'react'

interface Props {
  children?: React.ReactNode
  onClick: () => void
}

const StyledButton: FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

export default StyledButton
