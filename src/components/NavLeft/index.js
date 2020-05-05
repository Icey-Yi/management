import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, connect } from 'umi'
import { DashboardOutlined, MessageOutlined, ProfileOutlined, TeamOutlined, ScheduleOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less'
import Logo from './../../images/logo-ant.svg'
//import menuconfig from './../../config/menuconfig'
const { SubMenu } = Menu;

@connect(({app})=>({app}))
class NavLeft extends Component {
  state = {
    openKeys: [],
    selectedKeys:['/console/finance'],
    rootSubmenuKeys : ['sub1', 'sub2', 'sub3', 'sub5', 'sub6', 'sub7'],
    icons : [<DashboardOutlined/>,<MessageOutlined/>,<ProfileOutlined/>, ,<TeamOutlined/>,<ScheduleOutlined/>,<SettingOutlined/>],
  };

  componentDidMount(){
    this.getmenudata();
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      this.setState({
        selectedKeys: [nextProps.location.pathname]
      })
    }else{
      this.setState({
        selectedKeys: [this.props.location.pathname]
      })
    }
  }
  
  getmenudata = () =>{
    const { dispatch } = this.props
    dispatch({
      type: 'app/getNavLeftData',
    })
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };


  renderMenu = (data,index=0,num=0) => {
    const {app} = this.props;
    return (
      data.map((item) => {
        if (item.sublist) {
          num++;
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  {this.state.icons[item.icon-1]}
                  {app.menufold&&index===num-1? " " :<span>{item.title}</span>}
                </span>
              }
            >
              {this.renderMenu(item.sublist,index++,num)}
            </SubMenu>
          )
        }
        return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link> </Menu.Item>
      })
    )
  };



render() {
  const { app } = this.props;
  return (
    <div className="navleft-wrap">
      <div className="logo-wrap">
        <img src={Logo} />
        {app.menufold?"":<span>CRM Manager</span>}
      </div>
      <div className={app.menufold?"menu":""}>
        <Menu
          theme="dark"
          mode={app.menufold?"vertical":"inline"}
          selectedKeys={this.state.selectedKeys}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.renderMenu(app.menuconfig)}
        </Menu>
      </div>
    </div>
  )
}
}

export default NavLeft