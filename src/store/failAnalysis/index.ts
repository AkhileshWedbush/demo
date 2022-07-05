import { combineReducers } from '@reduxjs/toolkit';
import betafailanalysis from './beta-fail-analysis'
import p3failanalysis from './p3-fail-analysis'

export const failAnalysisReducer = combineReducers({
    betafailanalysis,
    p3failanalysis
})