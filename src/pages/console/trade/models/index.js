import { request } from 'umi'
export default {
  namespace: 'consoleTrade',

  state: {
    overviewdata:[],
    option1:{},
    option2:{},
  },

  effects: {
    *getTradeData({ payload }, { call, put }){
      const response = yield request('/api/console/trade');
      yield put({
        type: 'saveTradeData',
        payload: response
      })
    }
  },
  reducers: {
    saveTradeData(state, action){ 
      state.overviewdata = action.payload.overview;
      state.option1 = action.payload.option1;
      state.option2 = action.payload.option2;
    },
   
  },
  
};
