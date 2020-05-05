import { request } from 'umi'
export default {
  namespace: 'settingGroup',

  state: {
    data:[],
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/setting/group');
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
