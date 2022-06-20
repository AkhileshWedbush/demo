// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

interface GainerLoserProp {
  cusip: string
  symbol: string
  tickerName: string
  price: string
  changeValue: string
  changePct: string
  isDown: boolean
}

export interface TopGainersLosersProp {
  clientID: string
  topGainers: GainerLoserProp[]
  topLosers: GainerLoserProp[]
}

const financialSummary: TopGainersLosersProp = {
  clientID: '123233',
  topGainers: [
    {
      cusip: '123456',
      symbol: 'AMZN',
      tickerName: 'Amazon.com',
      price: '$3,232.32',
      changeValue: '$1.22',
      changePct: '3.1%',
      isDown: false,
    },
    {
      cusip: '123457',
      symbol: 'NELX',
      tickerName: 'Netflix',
      price: '$732.32',
      changeValue: '$1.22',
      changePct: '-3.1%',
      isDown: true,
    },
  ],
  topLosers: [
    {
      cusip: '123456',
      symbol: 'AMZN',
      tickerName: 'Amazon.com',
      price: '$3,232.32',
      changeValue: '$1.22',
      changePct: '3.1%',
      isDown: false,
    },
    {
      cusip: '123457',
      symbol: 'NELX',
      tickerName: 'Netflix',
      price: '$732.32',
      changeValue: '$1.22',
      changePct: '-3.1%',
      isDown: true,
    },
  ],
}

const FinancialSummaryRoute = (server: Server) => {
  server.get('/api/financialSummary', () => {
    return {
      financialSummary,
    }
  })
}

export default FinancialSummaryRoute
