import { request } from 'umi'
export default {
  namespace: 'articalColumn',

  state: {
    data:[]
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/artical/column');
      yield put({
        type: 'saveData',
        payload: response
      })
    }
  },
  reducers: {
    saveData(state, action){ 
      state.data = action.payload
    },
   
  },
  
};
