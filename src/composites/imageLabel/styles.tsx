import styled from 'styled-components'
import { Icons } from '../../shared/GlobalStyle'

export interface ImageProps {
  label: string
  text: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  background-image: linear-gradient(
      0deg,
      rgba(31, 94, 183, 0.3),
      rgba(31, 94, 183, 0.3)
    ),
    url(${Icons.ArtBoard});
`

export const Heading = styled.div`
  flex: 0 1;
  flex-wrap: wrap;
  padding: 39.54% 50.14% 1.8% 12.43%;
`

export const SubHeading = styled.div`
  flex: 0 1;
  flex-wrap: wrap;
  padding: 0% 20% 39.66% 11.86%;
`
