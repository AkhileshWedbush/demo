import { RootContainer } from './styles'

function getYear() {
  const date = new Date()
  return date.getFullYear()
}

const FooterContent = () => {
  return (
    <RootContainer>
      <p>
        Copyright &copy;{getYear()} by Wedbush Securities. All Rights Reserved
      </p>
     
    </RootContainer>
  )
}

export default FooterContent
