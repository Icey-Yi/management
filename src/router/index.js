export default [
  {
    exact: false, path: '/', component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', redirect: '/console/finance' },
      { exact: true, path: '/console/finance', component: '@/pages/console/finance/index' },
      { exact: true, path: '/console/trade', component: '@/pages/console/trade/index' },
      { exact: true, path: '/console/account', component: '@/pages/console/account/index' },
      { exact: true, path: '/news/todo', component: '@/pages/news/todo/index'},
      { exact: true, path: '/artical/column', component: '@/pages/artical/column/index'},
      { exact: true, path: '/artical/manage/announcement', component: '@/pages/artical/manage/announcement/index'},
      { exact: true, path: '/artical/manage/edit', component: '@/pages/artical/manage/edit/index'},
      { exact: true, path: '/custom/management', component: '@/pages/custom/management/index'},
      { exact: true, path: '/custom/account', component: '@/pages/custom/account/index'},
      { exact: true, path: '/approval/open', component: '@/pages/approval/open/index'},
      { exact: true, path: '/approval/deposit', component: '@/pages/approval/deposit/index'},
      { exact: true, path: '/setting/role', component: '@/pages/setting/role/index'},
      { exact: true, path: '/setting/group', component: '@/pages/setting/group/index'},
    ],
  }
]
