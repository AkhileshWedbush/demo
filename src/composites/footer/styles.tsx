import styled from 'styled-components'

export interface FooterProps {
  label: string
  text: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6eaf0;
  padding: 1rem 1.5rem;
`
export const InnerContainer = styled.div`
  padding-bottom: 0.75rem;
`

export const AnchorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`
