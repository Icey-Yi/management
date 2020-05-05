import { request } from 'umi'
export default {
  namespace: 'newsTodo',

  state: {
    timelineData:[]
  },

  effects: {
    *getTodoData({ payload }, { call, put }){
      const response = yield request('/api/news/todo');
      yield put({
        type: 'saveTimelineData',
        payload: response
      })
    }
  },
  reducers: {
    saveTimelineData(state, action){ 
      state.timelineData = action.payload
    },
   
  },
  
};
