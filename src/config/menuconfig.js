const menulist =
  [
    {
      title: "控制台",
      icon: 1,
      key: "sub1",
      sublist: [
        {
          title: "资金",
          key: "/console/finance",
        },
        {
          title: "交易",
          key: "/console/trade",
        },
        {
          title: "账户",
          key: "/console/account",
        },
      ]
    },
    {
      title: "消息中心",
      key: "sub2",
      icon: 2,
      sublist: [
        {
          title: "待办事务",
          key: "/news/todo",
        },
      ]
    },
    {
      title: "文章公告",
      key: "sub3",
      icon: 3,
      sublist: [
        {
          title: "栏目管理",
          key: "/artical/column",
        },
        {
          title: "文章管理",
          key: "sub4",
          sublist: [
            {
              title: "公告列表",
              key: "/artical/manage/announcement",
            }, {
              title: "文章列表",
              key: "/artical/manage/edit",
            },
          ]
        },
      ]
    },
    {
      title: "客户关系",
      key: "sub5",
      icon: 5,
      sublist: [
        {
          title: "客户管理",
          key: "/custom/management",
        },
        {
          title: "交易账户管理",
          key: "/custom/account",
        },
      ]
    },
    {
      title: "审批管理",
      key: "sub6",
      icon: 6,
      sublist: [
        {
          title: "开户审批",
          key: "/approval/open",
        },
        {
          title: "出入金审批",
          key: "/approval/deposit",
        },
      ]
    },
    {
      title: "系统设置",
      key: "sub7",
      icon: 7,
      sublist: [
        {
          title: "角色与权限管理",
          key: "/setting/role",
        },
        {
          title: "交易账户分组管理",
          key: "/setting/group",
        },
      ]
    },
  ];

export default menulist