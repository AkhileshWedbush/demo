import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'flex-start';
  align-items: 'center';
  padding: 12px 40px 12px 40px;
  overflow-x: hidden;
  color: white;
  background-color: #00245d;
`

export const StockPriceWrapper = styled.div`
  margin-right: 4px;
  margin-left: 4px;
  &::after {
    /* content: '▼';  */
    /* color:#CF4242; */
    content: '▲';
    color: #42cf8c;
    margin: 0 4px;
  }
`

export const StockInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 4px;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
`
