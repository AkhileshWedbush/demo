// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface AccountProp {
  accountNumber: string
  accountName: string
  accountType: string
  accountBalance: number
  gainLossValue: number
  gainLossPct: number
  gainLossValueDown: boolean
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
      accountBalance: 3423.41,
      gainLossValue: 34.23,
      gainLossPct: 0.34,
      gainLossValueDown: false,
    },
    {
      accountNumber: '01230124',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      accountBalance: 3423.41,
      gainLossValue: 34.23,
      gainLossPct: 0.34,
      gainLossValueDown: false,
    },
    {
      accountNumber: '01230125',
      accountName: 'IRA Account - 201',
      accountType: 'IRA',
      accountBalance: 3423.41,
      gainLossValue: 34.23,
      gainLossPct: 0.34,
      gainLossValueDown: false,
    },
  ],
}

const AccountListRoute = (server: Server) => {
  server.get('/api/accountList', () => {
    return {
      accountList,
    }
  })
}

export default AccountListRoute
