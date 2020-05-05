import { request } from 'umi'
export default {
  namespace: 'articalCreate',

  state: {
    editor:null,
    type:"",
    title:"",
    time:"",
    content:"<p>welcome to wangEditor<p>",
    //editorContent:"<p>welcome to wangEditor<p>"
  },

  effects: {
    *getData({ payload }, { call, put }){
      const response = yield request('/api/artical/manage/create');
      yield put({
        type: 'saveData',
        payload: response[payload.id]
      })
    }
  },
  reducers: {
    saveData(state, action){
      state.type = action.payload.type || "";
      state.title = action.payload.title || "";
      state.time = action.payload.time || "";
      state.content = action.payload.content || "";
    },
    contentChange(state, action){
      state.content = action.payload.content;
    },
    setEditor(state, action){
      state.editor = action.payload.editor;
    },
  },
  
};
