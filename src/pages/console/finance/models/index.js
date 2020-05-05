import { request } from 'umi'
export default {
  namespace: 'consoleFinance',

  state: {
    financeData:[],
  },

  effects: {
    *getFinanceData({ payload }, { call, put }){
      const response = yield request('/api/console/finance');
      yield put({
        type: 'saveFinanceData',
        payload: response
      })
    }
  },
  reducers: {
    saveFinanceData(state, action){ 
      state.financeData = action.payload
    },
   
  },
  
};
