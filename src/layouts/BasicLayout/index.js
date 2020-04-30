import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { withRouter, connect } from 'umi'
import NavLeft from '../../components/NavLeft'
import Header from '../../components/Header'
import './index.less'

@withRouter
@connect(({app})=>({app}))
class BasicLayout extends Component {
  render() {
    const { app, children, location } = this.props
    return (
      <Row className="main-wrap">
        <Col className={app.menufold?"navleftfold":"navleft"}>
          <NavLeft location={location}/>
        </Col>
        <Col className={app.menufold?"mainfold":"main"}>
          <Header location={location} />
          {children}
        </Col>
      </Row>
    )
  }
}


export default BasicLayout