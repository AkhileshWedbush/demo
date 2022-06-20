// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface AccountProp {
  accountNumber: string
  accountName: string
  accountType: string
  accountBalance: number
  casValue?: number
  FDICSweep?: number
  margin?: number
  marketValue: number
  longMarketValue: number
  shortMarketValue: number
}

export interface AccountListProp {
  clientID: string
  accountList: AccountProp[]
}

const accountList: AccountListProp = {
  clientID: '123456',
  accountList: [
    {
      accountNumber: '01230123',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      accountBalance: 343242.34,
      casValue: 1232.12,
      FDICSweep: 1031.21,
      margin: -232.23,
      marketValue: 34234.23,
      longMarketValue: 0.0,
      shortMarketValue: 1002.0,
    },
    {
      accountNumber: '01230124',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      accountBalance: 343242.34,
      casValue: 1232.12,
      FDICSweep: 1031.21,
      margin: -232.23,
      marketValue: 34234.23,
      longMarketValue: 0.0,
      shortMarketValue: 1002.0,
    },
    {
      accountNumber: '01230125',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      accountBalance: 343242.34,
      casValue: 1232.12,
      FDICSweep: 1031.21,
      margin: -232.23,
      marketValue: 34234.23,
      longMarketValue: 0.0,
      shortMarketValue: 1002.0,
    },
  ],
}

const BalanceRoute = (server: Server) => {
  server.get('/api/balance', () => {
    return {
      accountList,
    }
  })
}

export default BalanceRoute
