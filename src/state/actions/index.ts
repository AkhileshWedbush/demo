import { ActionType } from './../actionTypes/'

interface SearchClientAction {
  type: ActionType.SEARCH_CLIENT
}

interface SearchClientSuccessAction {
  type: ActionType.SEARCH_CLIENT_SUCCESS
  payload: string[]
}

interface SearchClientErrorAction {
  type: ActionType.SEARCH_CLIENT_ERROR
  payload: string
}

export type Action =
  | SearchClientAction
  | SearchClientSuccessAction
  | SearchClientErrorAction
