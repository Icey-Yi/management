import React, { Component } from 'react'
import { Row, Col, Card, Select, Tabs } from 'antd'
import Chart from './../../../components/Chart'
//import tradedata from './../../../config/tradedata'
import { connect } from 'umi'
import "./index.less"

@connect(({consoleTrade})=>({consoleTrade}))
class Trade extends Component {


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type:'consoleTrade/getTradeData'
    })
  }


  render() {
    const {overviewdata, option1 , option2} = this.props.consoleTrade;
    return (
      <div className="home-wrap">
        <Row gutter={16} className="wrap">
          <Col span={12}>
            <Card title="仓位总览" bordered={false} className="overview" style={{ height: 350 }}>
              <Col>
                <div><span>余额</span><h1>{overviewdata.balance}</h1></div>
                <Row>
                  <div><span>可供交易保证金</span><h2>{overviewdata.tradeMarginAvailiable}</h2></div>
                  <div style={{ marginLeft: "150px" }}><span>保证金水平</span><h2>{overviewdata.margin}</h2></div>
                </Row>
                <div><span>盈亏</span><h2 style={{ color: "green" }}>{overviewdata.profit}</h2></div>
              </Col>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="仓位比例" bordered={false} style={{ height: 350 }}>
              <Chart style={{ width: '100%', height: '250px' }} options={option1} />
              <div className="sum-wrap"><span>总持仓</span><p>{overviewdata.gross}</p></div>
            </Card>
          </Col>
        </Row>
        <Card title="仓位统计" className="chart">
          <Chart style={{ width: '100%', height: '400px' }} options={option2} />

        </Card>
    </div>
    )
  }
}


export default Trade