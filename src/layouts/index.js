import React, { Component, Fragment } from 'react'
import { Row, Col } from 'antd'
import { withRouter } from 'umi'
import NavLeft from './../components/NavLeft'
import Header from './../components/Header'
import './index.less'

@withRouter
class Layout extends Component {
  render() {
    const { children, location } = this.props
    /*if (location.pathname === '/login') {
      console.log(children)
      return <SimpleLayout>{children}</SimpleLayout>
    }
    console.log(children)*/
    return (
      <Row className="main-wrap">
        <Col className="navleft">
          <NavLeft location={location}/>
        </Col>
        <Col className="main">
          <Header location={location}/>
          {children}
        </Col>
      </Row>
    )
  }
}


export default Layout