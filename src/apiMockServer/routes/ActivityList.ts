// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface ActivityProp {
  accountNumber: string
  accountName: string
  accountType: string
  lineItemNumber: string
  date: string
  action: string
  category: string
  quantity: number
  cusip?: string
  tickerSymbol?: string
  transactionDescription: string
  amount: number
}

export interface ActivityListProp {
  clientID: string
  netCashFlow: string
  activityList: ActivityProp[]
}

const activityList: ActivityListProp = {
  clientID: '123456',
  netCashFlow: '$234,231.34',
  activityList: [
    {
      accountNumber: '01230123',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      lineItemNumber: '1234567',
      date: '3/21/2022',
      action: 'Dividend',
      category: 'Withdrawals',
      quantity: 34,
      cusip: '343522',
      tickerSymbol: 'AMZN',
      transactionDescription: 'Amazon.com, Inc.',
      amount: 232.34,
    },
    {
      accountNumber: '01230124',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      lineItemNumber: '1234567',
      date: '3/21/2022',
      action: 'Dividend',
      category: 'Withdrawals',
      quantity: 34,
      cusip: '343522',
      tickerSymbol: 'AMZN',
      transactionDescription: 'Amazon.com, Inc.',
      amount: 232.34,
    },
    {
      accountNumber: '01230125',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      lineItemNumber: '1234567',
      date: '3/21/2022',
      action: 'Dividend',
      category: 'Withdrawals',
      quantity: 34,
      cusip: '343522',
      tickerSymbol: 'AMZN',
      transactionDescription: 'Amazon.com, Inc.',
      amount: 232.34,
    },
  ],
}

const ActivityListRoute = (server: Server) => {
  server.get('/api/activityList', () => {
    return {
      activityList,
    }
  })
}

export default ActivityListRoute
