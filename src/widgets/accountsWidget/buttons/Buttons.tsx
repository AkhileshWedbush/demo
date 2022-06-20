import { useNavigate } from 'react-router-dom'
import StyledButton from './StyledButton'

export const HoldingsButton = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('holdings')
  }

  return <StyledButton onClick={onClickHandler}>Holdings</StyledButton>
}

export const ActivityButton = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('activity')
  }

  return <StyledButton onClick={onClickHandler}>Activity</StyledButton>
}
