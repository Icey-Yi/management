
export default {
    namespace: 'app',
  
    state: {
      menufold: false,
    },
  
    effects: {
      *query({ payload }, { call, put }) {
      },
    },
    reducers: {
      // 启用 immer 之后
       save(state, action) {
         state.name = action.payload;
       },
       changeMenuFold(state, action){
           state.menufold = !action.payload;
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
  