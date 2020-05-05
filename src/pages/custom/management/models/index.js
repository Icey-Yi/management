import { request } from 'umi'
export default {
  namespace: 'customManage',

  state: {
    filteredInfo: null,
    sortedInfo: null,
    data:[],
    pagination:{
      defaultCurrent: 1,
      defaultPageSize: 10,
      pageSizeOptions: ['10','20','30','40'],
      total: 50,
      showSizeChanger: true,
      showQuickJumper: true,
    }
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/custom/management');
      yield put({
        type: 'saveData',
        payload: response
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
    },
  },
  
};
