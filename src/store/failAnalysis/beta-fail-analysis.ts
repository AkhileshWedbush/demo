import { StoreState } from '../index';

/* eslint-disable prefer-const */

import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import {authApiCall} from '../../utils/api'


interface State {
  csv: string;
  returnMailAndEmailReport: [];
  totalCount: number;
  isLoading: boolean;
  currentPage: number;
  pages: number;
  pageSize: number;
  action: string;
 
}

let initialState: State = {
  returnMailAndEmailReport: [],
  totalCount: 0,
  currentPage: 0,
  pages: 0,
  pageSize: 50,
  csv: '',
  isLoading: false,
  action: '',
  
};

const { actions, reducer }: Slice = createSlice({
  name: 'return-mail-and-email-report',
  initialState,
  reducers: {
    setReturnMailAndEmailReportAccount: (state: State, action: PayloadAction<any>) => {
      state.returnMailAndEmailReport = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.pages = Math.ceil(action.payload.totalCount / action.payload.pageSize);
      state.pageSize = action.payload.pageSize;
      state.currentPage = action.payload.currentPage;
    },
    setIsLoading: (state: State, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setReturnMailAndEmailReportCSV: (state: State, action: PayloadAction<any>) => {
      state.csv = action.payload;
    },
   
    setAction: (state: State, action: PayloadAction<string>) => {
      state.action = action.payload;
      state.isLoading = true;
    },
    
  },
});

export const { setAction,setReturnMailAndEmailReportAccount, setIsLoading,setReturnMailAndEmailReportCSV } = actions;

/**
 * getReturnMail
 * API - GET call to get beta new accounts report
 * @param {string} startDate 
 * @param {string} endDate 
 */
export const getReturnMailAndEmailReport:any = (  startDate: string, endDate: string) => async (dispatch: Dispatch) => {


  try {
    console.log("TEST2");
    const { data, status } = await authApiCall.get('NewAccounts/ReturnMailAndEmailReport', {
      params: {
        
        startDate,
        endDate,

      }
    });

    if (status === 200) {
      console.log("TEST3");
      dispatch(setReturnMailAndEmailReportAccount({
        data: data.data,
        totalCount: data.totalCount,
      }));
      dispatch(setIsLoading(false));
      return(data)
    }
  } catch (e: any) {
    dispatch(setIsLoading(false));

  }
  
};


  export const betaFailAnalysisDataSelector = (store:StoreState) =>store.failAnalysis.betafailanalysis.betafailanalysis;
  export default reducer;