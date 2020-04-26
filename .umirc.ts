import { defineConfig } from 'umi'
import router from './src/router'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base:"#",
  antd:{},
  dva:{
    immer: true,
    hmr: true
  },
  routes: router,
});
