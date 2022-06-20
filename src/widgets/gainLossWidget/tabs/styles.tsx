import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const StyleTabs = styled(Tabs)`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #374253;

  border-radius: 4px;

  -webkit-tap-highlight-color: transparent;

  .react-tabs__tab--selected {
    background: #1f5eb7;
    color: #ffffff;
    border-radius: 4px;
  }

  .react-tabs__tab--disabled {
    color: #374253;
    background: #f0f2f5;
    border-radius: 4px;
    cursor: default;
  }
`

export const StyleTabList = styled(TabList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
  border-radius: 4px;

  margin-bottom: 16px;
  margin-top: 16px;

  /* border: 1px solid #1f5eb7; */
  /* padding: 4px; */
`

export const StyleTab = styled(Tab)`
  width: 50%;
  padding: 4px 10px;
  border-radius: 4px;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
`

export const StyleTabPanel = styled(TabPanel)`
  /* display: none; */
  &:selected {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`
