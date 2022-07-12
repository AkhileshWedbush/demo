/* eslint-disable @typescript-eslint/no-unused-vars */

import { configureStore, Store ,combineReducers} from '@reduxjs/toolkit';
import {failAnalysisReducer} from './failAnalysis'
// import {persistReducer,persistStore,} from "redux-persist";
//  import storage from "redux-persist/lib/storage";
//  import betaFailAnalysisUser from './failAnalysis/beta-fail-analysis-user'



 const reducer = combineReducers({
  failAnalysis:failAnalysisReducer,
  // failAnalysisUser:betaFailAnalysisUser
 })

//  const persistConfig={
//     key:"root",
//     storage,
//     whitelist:["failAnalysisUser"]
// }

//  const persistRoot = persistReducer(persistConfig,reducer)

 const store:Store =configureStore({
  reducer
  // reducer: persistRoot,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
 })

//  export const persistor = persistStore(store)


 export type StoreState =ReturnType <typeof reducer>
export default store