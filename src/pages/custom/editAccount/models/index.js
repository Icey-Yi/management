import { request } from 'umi'
export default {
  namespace: 'editAccount',

  state: {
    filteredInfo: null,
    sortedInfo: null,
    data:[],
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/custom/editAccount');
      yield put({
        type: 'saveData',
        payload: response[payload.id]
      })
    },
   
  },
  reducers: {
    saveData(state, action){ 
      state.data = action.payload
    },
    handleChange(state, action){
      state.filteredInfo = action.payload.filteredInfo;
      state.sortedInfo = action.payload.sortedInfo;
    }
  },
  
};
