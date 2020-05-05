import React, { Component } from 'react'
import { withRouter, connect, request } from 'umi'
import './index.less'
import BasicLayout from './BasicLayout'
import SimpleLayout from './SimpleLayout'

@withRouter
@connect(({app, loading}) => ({app, loading}))
class Layout extends Component {

  componentDidMount(){
   /*const { dispatch}  = this.props;
   dispatch({
     type:"app/getTestData",
     payload:{id:1},
   })*/
  }

  render() {
    const { children, location } = this.props
    
    return (
      location.pathname === '/login' ?
        <SimpleLayout>{children}</SimpleLayout>
        : <BasicLayout >{children}</BasicLayout>)
  }
}


export default Layout