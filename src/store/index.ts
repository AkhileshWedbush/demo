import { createStore } from 'redux'

interface ActionType {
  // INCREMENT = 'increment',
  // DECREMENT = 'decrement',
  type: string
}

const counterReducer = (state = { counter: 0 }, action: ActionType) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state
}

const store = createStore(counterReducer)

export default store
