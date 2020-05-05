//import { getTestDataList } from '../service/api'
import { request } from 'umi'
export default {
  namespace: 'app',

  state: {
    menufold: false,
    breadCrumb: {},
    tab1: {},
    tab2: {},
    menuconfig: [],
  },

  effects: {
    *getTestData({ payload }, { call, put }) {
      const response = yield request('/api');
      let data;
      for (let i in response) {
        if (response[i].id === payload.id) {
          data = response[i].name
        }
      }
      //console.log(data)
      yield put({
        type: 'save',
        payload: data
      }) 

    },
    *getHeaderData({ payload }, { call, put }) {
      const response = yield request('/api/header');
      yield put({
        type: 'getBreadCrumbList',
        payload: response
      })
    },
    *getNavLeftData({ payload }, { call, put }) {
      const response = yield request('/api/navleft');
      yield put({
        type: 'getNavMenu',
        payload: response
      })
    }
  },
  reducers: {
    // 启用 immer 之后
    save(state, action) {
      state.name = action.payload;
    },
    changeMenuFold(state, action) {
      state.menufold = !action.payload;
    },
    getBreadCrumbList(state, action) {
      state.breadCrumb = action.payload.breadcrumbMap;
      state.tab1 = action.payload.tab1;
      state.tab2 = action.payload.tab2;
    },
    getNavMenu(state, action) {
      state.menuconfig = action.payload;
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};
