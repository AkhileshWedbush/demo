import { ActionType } from './../actionTypes'
import { Action } from './../actions/index'
interface ClientState {
  loading: boolean
  error: string | null
  data: string[]
}

const reducer = (state: ClientState, action: Action): ClientState => {
  switch (action.type) {
    case ActionType.SEARCH_CLIENT:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_CLIENT_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_CLIENT_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
