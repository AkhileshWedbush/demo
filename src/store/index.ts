import { configureStore, Store ,combineReducers} from '@reduxjs/toolkit';
 import {failAnalysisReducer} from './failAnalysis'

 const reducer = combineReducers({
  failAnalysis:failAnalysisReducer
 })

 const store:Store =configureStore({
  reducer
 })

 export type StoreState =ReturnType <typeof reducer>
export default store
