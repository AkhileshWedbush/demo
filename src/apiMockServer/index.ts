// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Model, Server } from 'miragejs'

import StocksRoute from './routes/StocksRoute'
import FinancialSummaryRoute from './routes/TopGainersLosers'
import AccountListRoute from './routes/AccountList'

function MockServer() {
  return new Server({
    logging: true,
    models: {
      stock: Model,
    },

    routes() {
      StocksRoute(this)
      FinancialSummaryRoute(this)
      AccountListRoute(this)
    },
    // seeds(server) {
    //   server.db.loadData({
    //     stocks: stocks,
    //   })
    // },
  })
}

export default MockServer
