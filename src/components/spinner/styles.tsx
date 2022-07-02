import styled from 'styled-components'

export const StyledSpinner = styled.div`
  border: 5px solid rgb(151, 182, 239) ;
  border-top: 5px solid
    ${(props: any) => (props.borderColorTop ? props.borderColorTop : null)};
  border-radius: 50%;
  width: ${(props: any) => (props.size ? props.size : '16px')};
  height: ${(props: any) => (props.size ? props.size : '16px')};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
