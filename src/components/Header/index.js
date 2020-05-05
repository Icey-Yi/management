import React, { Component } from 'react'
import {
  MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, UserOutlined,
  SettingOutlined, CloseCircleOutlined, LogoutOutlined
} from '@ant-design/icons'
import { Breadcrumb, Dropdown, Menu, Badge, Popover, Tabs, List, Avatar } from 'antd'
import { Link, connect } from 'umi'
import picSrc from './../../images/shiyi.jpg'
import './index.less'

@connect(({ app, loading }) => ({ app, loading }))
class Header extends Component {
  state = {
    name: "Admin",
    count: 12,
  }

  componentDidMount() {
    this.getheaderdata();
  }

  componentWillReceiveProps(nextProps) {
    const {app} = this.props;
    if (nextProps.location.pathname != this.props.location.pathname) {
      this.getbreadcrumb(app.breadCrumb, nextProps);
    }else{
      this.getbreadcrumb(app.breadCrumb);
    }
  }

  getheaderdata = () =>{
    const { dispatch } = this.props
    dispatch({
      type: 'app/getHeaderData',
    })
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
          <Breadcrumb.Item key="/"><Link to="/console/finance">{data[url]}</Link></Breadcrumb.Item>
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
    const { TabPane } = Tabs;
    const { tab1, tab2, menufold } = app;
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
          <i className="menufold" onClick={this.menufoldchange}>{menufold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</i>
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