// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface CashProp {
  itemNumber: string
  description: string
  currentValue: number
}

export interface NonCashProp {
  itemNumber: string
  cusip: string
  tickerSymbol: string
  description: string
  quantity: number
  unitCostBasis: number
  lastPrice: number
  todaysGainLoss: number
  todaysGainLossPct: number
  currentValue: number
  costBasis: number
  totalGainLoss: number
  totalGainLossPct: number
  WedbushRating: string
  projectedIncome: number
}
export interface HoldingsProp {
  clientID: string
  cashHoldings?: CashProp[]
  nonCashHoldings?: NonCashProp[]
}

const holdings: HoldingsProp = {
  clientID: '123456',

  cashHoldings: [
    {
      itemNumber: '123345',
      description: 'FDIC Sweep',
      currentValue: 130.19,
    },
    {
      itemNumber: '123346',
      description: 'Cash',
      currentValue: 119.69,
    },
  ],

  nonCashHoldings: [
    {
      itemNumber: '123343',
      cusip: '2312312',
      tickerSymbol: 'AMZN',
      description: 'Amazon.com',
      quantity: 5,
      unitCostBasis: 3322.23,
      lastPrice: 3822.23,
      todaysGainLoss: 34.23,
      todaysGainLossPct: 5.23,
      currentValue: 23233.23,
      costBasis: 1823.23,
      totalGainLoss: 823.23,
      totalGainLossPct: 4.23,
      WedbushRating: 'Outperform',
      projectedIncome: 2392.13,
    },
    {
      itemNumber: '123344',
      cusip: '2312312',
      tickerSymbol: 'AMZN',
      description: 'Amazon.com',
      quantity: 5,
      unitCostBasis: 3322.23,
      lastPrice: 3822.23,
      todaysGainLoss: 34.23,
      todaysGainLossPct: 5.23,
      currentValue: 23233.23,
      costBasis: 1823.23,
      totalGainLoss: 823.23,
      totalGainLossPct: 4.23,
      WedbushRating: 'Outperform',
      projectedIncome: 2392.13,
    },
    {
      itemNumber: '123345',
      cusip: '2312312',
      tickerSymbol: 'AMZN',
      description: 'Amazon.com',
      quantity: 5,
      unitCostBasis: 3322.23,
      lastPrice: 3822.23,
      todaysGainLoss: 34.23,
      todaysGainLossPct: 5.23,
      currentValue: 23233.23,
      costBasis: 1823.23,
      totalGainLoss: 823.23,
      totalGainLossPct: 4.23,
      WedbushRating: 'Outperform',
      projectedIncome: 2392.13,
    },
  ],
}

const HoldingsRoute = (server: Server) => {
  server.get('/api/holdings', () => {
    return {
      holdings,
    }
  })
}

export default HoldingsRoute
