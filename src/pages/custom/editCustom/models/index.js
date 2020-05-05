import { request } from 'umi'
export default {
  namespace: 'editCustom',

  state: {
    data:[],
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/custom/editCustom');
      yield put({
        type: 'saveData',
        payload: response[payload.id]
      })
    },
   
  },
  reducers: {
    saveData(state, action){ 
      state.data = action.payload
    }
  },
  
};
