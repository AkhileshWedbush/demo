// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface EquityProp {
  accountNumber: string
  accountName: string
  currentValue: number
  allocationPct: number
}

export interface FixedIncomeProp {
  type: string
  currentValue: number
  allocationPct: number
}

export interface CashProp {
  currentValue: number
  allocationPct: number
}

export interface AssetAllocation {
  clientID: string
  equity?: EquityProp[]
  fixedIncome?: FixedIncomeProp[]
  cash?: CashProp[]
}

const assetAllocation: AssetAllocation = {
  clientID: '123456',

  equity: [
    {
      accountNumber: '123323',
      accountName: "IRA Account for Peter's Family",
      currentValue: 34232.34,
      allocationPct: 12.1,
    },
    {
      accountNumber: '123324',
      accountName: 'IRA Account for Susan',
      currentValue: 34232.34,
      allocationPct: 12.1,
    },
    {
      accountNumber: '123325',
      accountName: 'IRA Account for Peter',
      currentValue: 34232.34,
      allocationPct: 12.1,
    },
  ],

  fixedIncome: [
    {
      type: 'Mortgage',
      currentValue: 343213.23,
      allocationPct: 21.23,
    },
    {
      type: 'Municipal Bond',
      currentValue: 3243.25,
      allocationPct: 1.23,
    },
    {
      type: 'CDs',
      currentValue: 23122.23,
      allocationPct: 2.23,
    },
  ],

  cash: [
    {
      currentValue: 1234.32,
      allocationPct: 5.11,
    },
  ],
}

const AssetAllocationRoute = (server: Server) => {
  server.get('/api/assetAllocation', () => {
    return {
      assetAllocation,
    }
  })
}

export default AssetAllocationRoute
