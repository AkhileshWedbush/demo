// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface ClientProp {
  //Login ID to retrieve the account number & its primary owner
  clientID: string
  taxID: string // Do we need a tax ID?
  firstName: string
  lastName: string
  middleInitial: string
  greetingsMessage: string // No need
  asOfDateTime: string // How to retrieve it?
}

const client: ClientProp[] = [
  {
    clientID: '10001',
    taxID: '234-23-2432',
    firstName: 'John',
    lastName: 'Davidson',
    middleInitial: 'H',
    greetingsMessage: 'Good Morning!',
    asOfDateTime: '4/23/2020 5:34 PM',
  },
]

const ClientRoute = (server: Server) => {
  server.get('/api/client', () => {
    return {
      client,
    }
  })
}

export default ClientRoute
