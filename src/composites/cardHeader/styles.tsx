import React from 'react';
import styled from 'styled-components'
import { Colors, Backgrounds } from '../../shared/styles'

export interface HeaderProps {
  accordionHandler: React.MouseEventHandler<HTMLDivElement>
  label: string
  text: string
  isCollapsed: boolean
}
export const Account = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 16px;
  background: ${Backgrounds.Primary60};
  border-radius: 8px 8px 0px 0px;
`

export const LabelHeader = styled.div`
  flex: 5;
  order: 1;
  text-align: left;
  color: ${Colors.White};
  order: 0;
  white-space: pre;
`

export const LabelAmount = styled.div`
  flex: 1;
  order: 2;
  color: ${Colors.White};
  text-align: right;
  white-space: pre;
`
export const ChevronTop = styled.div`
  display: flex;
  // flex: 1;
  order: 3;
  justify-content: flex-end;
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
`
