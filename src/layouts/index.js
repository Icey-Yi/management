import React, { Component } from 'react'
import { withRouter, connect } from 'umi'
import './index.less'
import BasicLayout from './BasicLayout'
import SimpleLayout from './SimpleLayout'

@withRouter
@connect(({loading}) => ({loading}))
class Layout extends Component {
  render() {
    const { children, location } = this.props
    return (
      location.pathname === '/login' ?
        <SimpleLayout>{children}</SimpleLayout>
        : <BasicLayout >{children}</BasicLayout>)
  }
}


export default Layout