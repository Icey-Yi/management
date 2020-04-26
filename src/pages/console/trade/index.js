import React, { Component } from 'react'
import { Row, Col, Card, Select, Tabs } from 'antd'
import Chart from './../../../components/Chart'
import tradedata from './../../../config/tradedata'
import chartoptions from './../../../config/chartoption'
import "./index.less"
class Trade extends Component {


  componentDidMount() {
    const overviewdata = tradedata["overview"];
    this.setState({
      overviewdata
    })
  }


  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      icon: 'circle',
      data: ['EUR/USD', 'USD/JPY', 'GBP/JPY',
        'EUR/SEK', 'GBP/USD', 'OTHERS']
    },
    color: ['#0080FF', '#00E3E3', '#00BB00', '#FFD306', '#FF0000', '#6F00D2'],
    series: [
      {
        name: "",
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        right: 200,
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        hoverAnimation: false,
        data: [
          { value: 1919, name: 'EUR/USD' },
          { value: 1758, name: 'USD/JPY' },
          { value: 1730, name: 'GBP/JPY' },
          { value: 1629, name: 'EUR/SEK' },
          { value: 1482, name: 'GBP/USD' },
          { value: 1482, name: 'OTHERS' }
        ]
      }
    ]
  };

  option2 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      bottom: 0,
      icon: 'rect',
      data: ['buy', 'sell']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    color: ['#0080FF', '#00BB00'],
    dataset: {
      source: [
        ['trade', 'buy', 'sell'],
        ['00:00', 18.9, 12.4],
        ['03:00', 28.8, 23.2],
        ['06:00', 39.3, 34.5],
        ['09:00', 81.4, 99.7],
        ['12:00', 47, 52.6],
        ['15:00', 20.3, 35.5],
        ['18:00', 24, 37.4],
        ['21:00', 35.6, 42.4],
      ]
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      /*axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      nameTextStyle: {
        color: '#333',
        fontWeitght: 'lighter',
        fontSize: 10,
      },*/
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      min: 0,
      max: 100,
      interval: 20,
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      { type: 'bar' },
      { type: 'bar' }
    ]
  };

  render() {

    return (
      <div className="home-wrap">
        <Row gutter={16} className="wrap">
          <Col span={12}>
            <Card title="仓位总览" bordered={false} className="overview" style={{ height: 350 }}>
              <Col>
                <div><span>余额</span><h1>$918,430.73</h1></div>
                <Row>
                  <div><span>可供交易保证金</span><h2>$911,829.44</h2></div>
                  <div style={{ marginLeft: "150px" }}><span>保证金水平</span><h2>$35,350.79</h2></div>
                </Row>
                <div><span>盈亏</span><h2 style={{ color: "green" }}>$28,711.40</h2></div>
              </Col>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="仓位比例" bordered={false} style={{ height: 350 }}>
              <Chart style={{ width: '100%', height: '250px' }} options={this.option} />
            </Card>
          </Col>
        </Row>
        <Card title="仓位统计" className="chart">
          <Chart style={{ width: '100%', height: '400px' }} options={this.option2} />

        </Card>
      </div>
    )
  }
}


export default Trade