import React, { Component } from 'react'
import { MenuFoldOutlined, BellOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Link } from 'umi'
import picSrc from './../../images/shiyi.jpg'
import breadcrumbMap from './../../config/breadcrumbmap'
import './index.less'

class Header extends Component {
  state = {
    name: "Admin",
  }

  componentDidMount(){
    this.getbreadcrumb(breadcrumbMap);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      this.getbreadcrumb(breadcrumbMap,nextProps);
    } 
 }


  getbreadcrumb = (data,props=this.props) => {
    const pathSnippets = props.location.pathname.split("/");
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
      if(url===""){
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


  render() {
    return (
      <div className="header">
        <div className="header-wrap clearfix">
          <i className="menufold"><MenuFoldOutlined /></i>
          <div className="message">
            <i className="bell"><BellOutlined /></i>
            <span>
              <img src={picSrc} />
              {this.state.name}
            </span>
          </div>
        </div>
        <div className="breadcrumb">
          <Breadcrumb>
            {this.state.breadcrumbItems}
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

export default Header