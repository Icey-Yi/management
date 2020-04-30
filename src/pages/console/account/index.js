import React, { Component } from 'react'
import { Row, Col, Card, Select, Radio, Table } from 'antd'
import './index.less'

class Account extends Component {

  state = {
    filteredInfo: null,
    sortedInfo: null,
    card1: {
      title: "账户盈亏排行榜",
      data: [[123, 123, 123, 123], [123, 123, 123, 123], [123, 123, 123, 123], [123, 123, 123, 123]],
      select: {
        selected: 'EUR/USD',
        data:['RMB', 'HKD', 'EUR/USD']
      }
    },
    card2: {
      title: "保证金预警",
      data: [[123, 123, 123, 123], [123, 123, 123, 123], [123, 123, 123, 123], [123, 123, 123, 123]],
    },
    card3: {
      title: "新增客户",
      extradata: ["4H","12H","1D","1W"],
      data: []
    },
    card4:{
      title: "在线账户",
      type: "table",
      data: [
        {
          key:1, id:"C1011000", source:"IOS", currency:"RMB", balance:"0.00", 
          netaccountvalue:"0.00", marginratio:"120%", useablemargin:"0.00", ip:"10.32.12.32",
        },
        {
          key:2, id:"C1011001", source:"IOS", currency:"HKD", balance:"200.00",
          netaccountvalue:"50,000.00", marginratio:"110%",useablemargin:"1,452.42", ip:"172.218.14.58",
        },
        {
          key:3, id:"C1011002", source:"PC", currency:"RMB", balance:"20.00",
          netaccountvalue:"0.00", marginratio:"120%",useablemargin:"0.00", ip:"10.53.110.251",
        },
        {
          key:4, id:"C1011004", source:"IOS", currency:"RMB", balance:"2,304.00",
          netaccountvalue:"48,000.00", marginratio:"120%",useablemargin:"2,852.56", ip:"88.150.237.157",
        },
        {
          key:5, id:"C1011003", source:"MAC", currency:"RMB", balance:"34,234.00",
          netaccountvalue:"126,000.00", marginratio:"60%",useablemargin:"3,545.05", ip:"78.128.156.22",
        },
        {
          key:6, id:"C1011004", source:"IOS", currency:"USD", balance:"12,239.00",
          netaccountvalue:"450,000.00", marginratio:"80%",useablemargin:"6,517.17", ip:"87.117.239.51",
        },
        {
          key:7, id:"C1011005", source:"Andriod", currency:"HKD", balance:"4,000.00",
          netaccountvalue:"15,000.00", marginratio:"100%",useablemargin:"86,469.32", ip:"95.154.237.19",
        },
        {
          key:8, id:"C1011006", source:"PC", currency:"RMB", balance:"320.00",
          netaccountvalue:"43,000.00", marginratio:"110%",useablemargin:"54,993.95", ip:"151.80.38.24",
        },
        {
          key:9, id:"C1011007", source:"PC", currency:"RMB", balance:"0.00",
          netaccountvalue:"50,000.00", marginratio:"120%",useablemargin:"67,003.02", ip:"151.237.89.19",
        },
        {
          key:10, id:"C1011008", source:"IOS", currency:"RMB", balance:"0.00",
          netaccountvalue:"20.00", marginratio:"120%",useablemargin:"84,139.21", ip:"78.165.71.72",
        },
        {
          key:11, id:"C1011009", source:"Android", currency:"USD", balance:"320.00",
          netaccountvalue:"43,000.00", marginratio:"120%",useablemargin:"54,993.95", ip:"151.80.39.24",
        },
        {
          key:12, id:"C1011010", source:"IOS", currency:"RMB", balance:"0.00",
          netaccountvalue:"50,000.00", marginratio:"120%",useablemargin:"15,983.42", ip:"181.62.42.18",
        },
        {
          key:13, id:"C1011011", source:"MAC", currency:"USD", balance:"450.00",
          netaccountvalue:"123,890.00", marginratio:"120%",useablemargin:"12,974.12", ip:"164.33.64.125",
        },
        {
          key:14, id:"C1011012", source:"PC", currency:"HKD", balance:"480.00",
          netaccountvalue:"145,980.00", marginratio:"110%",useablemargin:"419.72", ip:"174.67.45.126",
        },
        {
          key:15, id:"C1011013", source:"IOS", currency:"HKD", balance:"30.00",
          netaccountvalue:"570.00", marginratio:"70%",useablemargin:"627.09", ip:"168.23.54.64",
        },

      ]
    }
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  getCardNode = (data) => {
    if(data.extradata){
    const extralist= <Radio.Group buttonStyle="outline">{data.extradata.map((item,index)=>{return (<Radio.Button key={index} value={item}>{item}</Radio.Button>)})}</Radio.Group>
      return (
        <Card className="account-card-wrap" title={data.title} extra={extralist} style={{ height: 104}}></Card>
      )
    }
    let extra;
    if(data.select){
      extra = <Select style={{height:30, width: 100 }} bordered={false} defaultValue={data.select.selected}>
      {data.select.data.map((item,index) => { return <Select.Option key={index}value={item}>{item}</Select.Option> })}
    </Select>;
    }
    return (
      <Card title={data.title} extra={extra ? extra : " "} bordered={false} style={{ height: 250 }}>
        {data.data.map((item,index) => {
          return (
            <Row key={index} gutter={[16, 16]}>
              {
                item.map((item,index) => {
                  return (<Col key={index} span={6}>{item}</Col>)
                })
              }
            </Row>
          )
        })}
      </Card>
    )
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '交易账号',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href={`custom/editCustom/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '来源',
        dataIndex: 'source',
        key: 'source',
        ellipsis: true,
      },
      {
        title: '结算货币',
        dataIndex: 'currency',
        key: 'currency',
        filters: [
          { text: 'RMB', value: 'RMB'},
          { text: 'HKD', value: 'HKD' },
          { text: 'USD', value: 'USD' },
        ],
        filteredValue: filteredInfo.currency || null,
        onFilter: (value, record) => record.currency.includes(value),
        ellipsis: true,
      },
      {
        title: '余额',
        dataIndex: 'balance',
        key: 'balance',
        sorter: (a, b) => a.balance.split(",").join("") - b.balance.split(",").join(""),
        sortOrder: sortedInfo.columnKey === 'balance' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '账户净值',
        dataIndex: 'netaccountvalue',
        key: 'netaccountvalue',
        sorter: (a, b) => a.netaccountvalue.split(",").join("") - b.netaccountvalue.split(",").join(""),
        sortOrder: sortedInfo.columnKey === 'netaccountvalue' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '保证金比率',
        dataIndex: 'marginratio',
        key: 'marginratio',
        sorter: (a, b) => a.marginratio.slice(0,a.marginratio.length-1) - b.marginratio.slice(0,b.marginratio.length-1),
        sortOrder: sortedInfo.columnKey === 'marginratio' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '可用保证金',
        dataIndex: 'useablemargin',
        key: 'useablemargin',
        sorter: (a, b) => a.useablemargin.split(",").join("") - b.useablemargin.split(",").join(""),
        sortOrder: sortedInfo.columnKey === 'useablemargin' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'IP地址',
        dataIndex: 'ip',
        key: 'ip',
        ellipsis: true,
      }
    ];
    return (
      <div className="home-wrap">
        <Row gutter={16} className="wrap">
          <Col span={12}>
            {this.getCardNode(this.state.card1)}
          </Col>
          <Col span={12}>
            {this.getCardNode(this.state.card2)}
          </Col>
        </Row>
        {this.getCardNode(this.state.card3)}
        <Card className="account-card-wrap" title="在线账户" bordered={false} style={{ height: 752 }}>
        <Table columns={columns} dataSource={this.state.card4.data} onChange={this.handleChange} />
        </Card>
      </div >
    )
  }
}

export default Account