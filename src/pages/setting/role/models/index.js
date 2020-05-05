import { request } from 'umi'
export default {
  namespace: 'settingRole',

  state: {
    data:[],
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/setting/role');
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
