import { request } from 'umi'
export default {
  namespace: 'stepForm',

  state: {
    data:{},
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/approval/stepForm');
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
  },
  
};
