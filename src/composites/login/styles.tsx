import styled from 'styled-components'

export interface LoginProps {
  label: string
  text1: string
  text2: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-size: 100% 100%;
  //background-color: #e5e5e5;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  padding: 29% 26.23% 19% 18.03%;
`

export const Message = styled.div`
  padding: 0% 0% 5.9% 0%;
`

export const Email = styled.div`
  padding: 0% 0% 3.92% 0%;
`

export const Password = styled.div`
  padding: 0% 0% 5.9% 0%;
`

export const SignIn = styled.div`
  padding: 0% 0% 3.917% 0%;
  // width: 408px;
  // height: 40px;
  //text-align:center;
`

export const AnchorOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0% 0% 3.9% 0%;
`

export const AnchorTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 8px;
`
export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 8px;
`
