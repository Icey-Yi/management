import React, { Component } from 'react'
import { Row, Col, Card, Select, Tabs } from 'antd'
import Chart from './../../../components/Chart'
import { connect } from 'umi'
import chartoptions from './../../../config/chartoption'
import "./index.less"

@connect(({consoleFinance})=>({consoleFinance}))
class Finance extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'consoleFinance/getFinanceData'
    })
  }

  render() {
    const { financeData } = this.props.consoleFinance;
    const { TabPane } = Tabs;
    const operations = <Select style={{ width: 80 }} defaultValue="4H">{["4H", "8H", "12H", "1D"].map((item) => { return <Select.Option value={item}>{item}</Select.Option> })}</Select>;
    return (
      <div className="home-wrap">
        <Row gutter={16}>
          {financeData.map((_, key) => {
            return (
              <Col key={key} span={8}>
                <Card bordered={false} className="table" style={{ height: 224 }}>
                  {_.map((item, index) => {
                    if (item.choose) {
                      return (
                        <p key={index}>
                          <span>{item.title}</span>
                          <span className="price">{item.data}</span>
                          <Select className="choose" defaultValue="week" style={{ width: 90 }} bordered={false}>
                            <Select.Option value="week">本周</Select.Option>
                            <Select.Option value="month">本月</Select.Option>
                            <Select.Option value="year">本年度</Select.Option>
                          </Select>
                        </p>
                      )
                    }
                    return (
                      <p key={index}><span>{item.title}</span><span className="price">{item.data}</span></p>
                    )
                  })}
                </Card>
              </Col>
            )
          })}
        </Row>
        <Card className="chart">
          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="资金变动" key="1">
              <Chart style={{ width: '100%', height: '400px' }} options={chartoptions} />
            </TabPane>
            <TabPane tab="盈利" key="2">
              <Chart style={{ width: '100%', height: '400px' }} options={chartoptions} />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}


export default Finance