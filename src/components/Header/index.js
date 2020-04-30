import React, { Component } from 'react'
import {
  MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, UserOutlined,
  SettingOutlined, CloseCircleOutlined, LogoutOutlined
} from '@ant-design/icons'
import { Breadcrumb, Dropdown, Menu, Badge, Popover, Tabs, List, Avatar } from 'antd'
import { Link, connect } from 'umi'
import picSrc from './../../images/shiyi.jpg'
import breadcrumbMap from './../../config/breadcrumbmap'
import './index.less'

@connect(({ app, loading }) => ({ app, loading }))
class Header extends Component {
  state = {
    name: "Admin",
    count: 12,
    tab1: {
      title: "通知",
      data: [
        {
          src: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
          title: "你收到了 14 份新周报",
          time: "2017-08-09",
          read: false,
        },
        {
          src: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
          title: "你推荐的 曲妮妮 已通过第三轮面试",
          time: "2017-08-08",
          read: false,
        },
        {
          src: "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
          title: "这种模板可以区分多种通知类型",
          time: "2017-08-07",
          read: true,
        },
        {
          src: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title: "左侧图标用于区分不同的类型",
          time: "2017-08-07",
          read: false,
        },
        {
          src: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
          title: "内容不要超过两行字，超出时自动截断",
          time: "2017-08-07",
          read: false,
        }
      ]
    },
    tab2: {
      title: "消息",
      data: [
        {
          title: "第三方紧急代码变更",
          status: "马上到期",
          description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务"
        },
        {
          title: "任务名称",
          status: "未开始",
          description: "任务需要在 2017-01-12 20:00 前启动"
        },
        {
          title: "信息安全考试",
          status: "已耗时 8 天",
          description: "指派竹尔于 2017-01-09 前完成更新并发布"
        },
        {
          title: "ABCD 版本发布",
          status: "已耗时 8 天",
          description: "指派竹尔于 2017-01-09 前完成更新并发布"
        }
      ]
    }
  }

  componentDidMount() {
    this.getbreadcrumb(breadcrumbMap);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      this.getbreadcrumb(breadcrumbMap, nextProps);
    }
  }

  menufoldchange = () => {
    const { dispatch, app } = this.props
    dispatch({
      type: 'app/changeMenuFold',
      payload: app.menufold
    })
  }

  getbreadcrumb = (data, props = this.props) => {
    const pathSnippets = props.location.pathname.split("/");
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
      if (url === "") {
        return (
          <Breadcrumb.Item key="/"><Link to="/">{data[url]}</Link></Breadcrumb.Item>
        )
      }
      return (<Breadcrumb.Item key={url}>{data[url]}</Breadcrumb.Item>)
    })
    this.setState({
      breadcrumbItems
    })
  };

  contentChange = (key) => {
    console.log(key)
  }


  render() {
    const { app } = this.props;
    console.log(app.menufold);
    const { TabPane } = Tabs;
    const { tab1, tab2 } = this.state;
    const content = (
      <Tabs defaultActiveKey="1" onChange={this.contentChange}>
        <TabPane tab={tab1.title} key="1">
          <List
            itemLayout="horizontal"
            dataSource={tab1.data}
            footer={<div className="clear">清空 通知</div>}
            renderItem={item => (
              <List.Item className={item.read ? "listitem read" : "listitem"}>
                <List.Item.Meta
                  avatar={<Avatar src={item.src} />}
                  title={<h4>{item.title}</h4>}
                  description={<div className="description">{item.time}</div>}
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab={tab2.title} key="2">
          <List
            itemLayout="horizontal"
            dataSource={tab2.data}
            footer={<div className="clear">清空 待办</div>}
            renderItem={item => (
              <List.Item className={item.read ? "listitem read" : "listitem"}>
                <List.Item.Meta
                  title={<div>{item.title}<div className="extra">{item.status}</div></div>}
                  description={<div className="description">{item.description}</div>}
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    );
    const menu = (
      <Menu >
        <Menu.Item className="menuitem">
          <a target="_self" href="">
            <UserOutlined /><span>个人中心</span>
          </a>
        </Menu.Item>
        <Menu.Item className="menuitem">
          <a target="_self" href="">
            <SettingOutlined /><span>设置</span>
          </a>
        </Menu.Item >
        <Menu.Item className="menuitem divider">
          <a target="_self" href="">
            <CloseCircleOutlined /><span>触发报错</span>
          </a>
        </Menu.Item>
        <Menu.Item className="menuitem">
          <a target="_self" href="/login">
            <LogoutOutlined /><span>退出登录</span>
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="header">
        <div className="header-wrap clearfix">
          <i className="menufold" onClick={this.menufoldchange}>{app.menufold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</i>
          <div className="message">
            <span className="bell">
              <Popover placement="bottomRight" content={content} trigger="click">
                <Badge count={this.state.count}><i><BellOutlined /></i></Badge>
              </Popover>
            </span>
            <Dropdown overlay={menu} placement="bottomCenter">
              <span><img src={picSrc} />{this.state.name}</span>
            </Dropdown>
          </div>
        </div>
        <div className="breadcrumb">
          <Breadcrumb>{this.state.breadcrumbItems}</Breadcrumb>
        </div>
      </div>
    )
  }
}

export default Header