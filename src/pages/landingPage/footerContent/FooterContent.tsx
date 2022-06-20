import { RootContainer } from './styles'

function getYear() {
  return '2022'
}

const FooterContent = () => {
  return (
    <RootContainer>
      <p>
        Copyright &copy;{getYear()} by Wedbush Securities. All Rights Reserved
      </p>
      <div>
        <a href="https://google.com">Terms of Use</a>
        <a href="https://google.com">Privacy Statement</a>
        <a href="https://google.com">My Disclosures</a>
        <a href="https://google.com">Service Fees</a>
        <a href="https://google.com">Contact Us</a>
        <a href="https://google.com">Member FINRA / SIPC </a>
      </div>
    </RootContainer>
  )
}

export default FooterContent
