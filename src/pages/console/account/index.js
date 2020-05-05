import React, { Component } from 'react'
import { Row, Col, Card, Select, Radio, Table } from 'antd'
import { connect } from 'umi'
import './index.less'

@connect(({ consoleAccount, loading }) => ({ consoleAccount, loading }))
class Account extends Component {

 
  componentDidMount(){
    this.getAccountData();
  }

  getAccountData= () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'consoleAccount/getAccountData'
    }) 
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    const { dispatch } = this.props;
    dispatch({
      type: 'consoleAccount/handleChange',
      payload: {
        filteredInfo: filters,
        sortedInfo: sorter,
      }
    })
  };

  getCardNode = (data) => {
    if (data.extradata) {
      const extralist = <Radio.Group buttonStyle="outline">{data.extradata.map((item, index) => { return (<Radio.Button key={index} value={item}>{item}</Radio.Button>) })}</Radio.Group>
      return (
        <Card className="account-card-wrap" title={data.title} extra={extralist} style={{ height: 104 }}></Card>
      )
    }
    let extra;
    if (data.select) {
      extra = <Select style={{ height: 30, width: 100 }} bordered={false} defaultValue={data.select.selected}>
        {data.select.data.map((item, index) => { return <Select.Option key={index} value={item}>{item}</Select.Option> })}
      </Select>;
    }
    return (
      <Card title={data.title} extra={extra ? extra : " "} bordered={false} style={{ height: 250 }}>
        {data.data?data.data.map((item, index) => {
          return (
            <Row key={index} gutter={[16, 16]}>
              {
                item.map((item, index) => {
                  return (<Col key={index} span={6}>{item}</Col>)
                })
              }
            </Row>
          )
        }):""}
      </Card>
    )
  }

  render() {
    const { consoleAccount } = this.props;
    let { sortedInfo, filteredInfo, card1, card2, card3, card4 } = consoleAccount;
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
          { text: 'RMB', value: 'RMB' },
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
        sorter: (a, b) => a.marginratio.slice(0, a.marginratio.length - 1) - b.marginratio.slice(0, b.marginratio.length - 1),
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
            {this.getCardNode(card1)}
          </Col>
          <Col span={12}>
            {this.getCardNode(card2)}
          </Col>
        </Row>
        {this.getCardNode(card3)}
        <Card className="account-card-wrap" title="在线账户" bordered={false} style={{ height: 752 }}>
          <Table columns={columns} dataSource={card4.data} onChange={this.handleChange} />
        </Card>
      </div >
    )
  }
}

export default Account