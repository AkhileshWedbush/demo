import { useState, useEffect } from 'react'

import { RootContainer, StockInfoContainer, StockPriceWrapper } from './styles'

interface StocksProp {
  ticker: string
  price: number
  isDown: boolean
  change: number
}

const StockWidgetContent = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('/api/stocks')
      .then((res) => res.json())
      .then((json) => setStocks(json.stocks))
  }, [])

  return (
    <>
      {stocks.map((item: StocksProp) => {
        return (
          <StockInfoContainer key={item.ticker}>
            {/* <div>{item.ticker}</div>
            <StockPriceWrapper>{item.price}</StockPriceWrapper>
            <div>{item.change}%</div> */}
          </StockInfoContainer>
        )
      })}
    </>
  )
}

const StockWidget = () => {
  return (
    <RootContainer>
      <StockWidgetContent />
    </RootContainer>
  )
}

export default StockWidget
