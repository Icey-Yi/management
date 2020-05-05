import { request } from 'umi'
export default {
  namespace: 'articalManage',

  state: {
    editData:[],
    announcementData:[],
  },

  effects: {
    *getEditData({ payload }, { call, put }){
      const response = yield request('/api/artical/manage');
      yield put({
        type: 'saveEditData',
        payload: response.editData
      })
    },
    *getAnnouncementData({ payload }, { call, put }){
      const response = yield request('/api/artical/manage');
      yield put({
        type: 'saveAnnouncementData',
        payload: response.announcementData
      })
    },
  },
  reducers: {
    saveEditData(state, action){ 
      state.editData = action.payload
    },
    saveAnnouncementData(state, action){ 
      state.announcementData = action.payload
    },
  },
  
};
