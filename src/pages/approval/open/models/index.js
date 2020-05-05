import { request } from 'umi'
export default {
  namespace: 'approvalOpen',

  state: {
    data:[],
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/approval/open');
      yield put({
        type: 'saveData',
        payload: response
      })
    },
   
  },
  reducers: {
    saveData(state, action){ 
      state.data = action.payload
    }
  },
  
};
