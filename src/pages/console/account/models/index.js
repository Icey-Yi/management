import { request } from 'umi'
export default {
  namespace: 'consoleAccount',

  state: {
    filteredInfo: null,
    sortedInfo: null,
    card1: {},
    card2: {},
    card3: {},
    card4: {},
  },

  effects: {
    *getAccountData({ payload }, { call, put }){
      const response = yield request('/api/console/account');
      console.log(response)
      yield put({
        type: 'saveAccountData',
        payload: response
      })
    }
  },
  reducers: {
    saveAccountData(state, action){ 
      state.card1 = action.payload.card1;
      state.card2 = action.payload.card2;
      state.card3 = action.payload.card3;
      state.card4 = action.payload.card4;
    },
    handleChange(state, action){
        state.filteredInfo = action.payload.filteredInfo;
        state.sortedInfo = action.payload.sortedInfo;
    }
   
  },
  
};
