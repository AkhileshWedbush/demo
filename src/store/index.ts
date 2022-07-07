import { configureStore, Store ,combineReducers,} from '@reduxjs/toolkit';
 import {failAnalysisReducer} from './failAnalysis'
 import {persistReducer,persistStore} from "redux-persist";
 import storage from "redux-persist/lib/storage";
 import betaFailAnalysisUser from './failAnalysis/beta-fail-analysis-user'
 import p3FailAnalysisUser from './failAnalysis/p3-fail-analysis-user'



 const reducer = combineReducers({
  failAnalysis:failAnalysisReducer,
  failAnalysisUser:betaFailAnalysisUser,
  failAnalysisUserForP3:p3FailAnalysisUser
 })

 const persistConfig={
    key:"root",
    storage,
    whitelist:["failAnalysisUser","failAnalysisUserForP3"]
}

 const persistRoot = persistReducer(persistConfig,reducer)

 const store:Store =configureStore({
  reducer: persistRoot,
 })

 export const persistor = persistStore(store)


 export type StoreState =ReturnType <typeof reducer>
export default store
