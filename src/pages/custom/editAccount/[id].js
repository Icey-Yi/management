import React, { Component } from 'react'
import { Card, Row, Col, Button, Tabs, Tag, Table } from 'antd'
import { connect } from 'umi'
import "./index.less"

@connect(({ editAccount, loading }) => ({ editAccount, loading: loading.effects['editAccount/getData'] }))
class EditAccountId extends Component {

  componentDidMount(){
    const { location, dispatch } = this.props;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    dispatch({
      type:'editAccount/getData',
      payload:{id}
    })
  }
  

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    const { dispatch } = this.props;
    dispatch({
      type: 'editAccount/handleChange',
      payload: {
        filteredInfo: filters,
        sortedInfo: sorter,
      }
    })
  };


  render() {
    const { location, editAccount, loading } = this.props;
    const { data } = editAccount;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    const datalist = data || {};
    const { basicInfo, customerInfo, tradeInfo1, tradeInfo2, tradeInfo3 } = datalist;
    const { TabPane } = Tabs;

    let { sortedInfo, filteredInfo } = editAccount;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: '订单号',
        dataIndex: 'tradeId',
        key: 'tradeId',
        render: text => <a href={`/#/custom/editCustom/${text}`}>{text}</a>,
      },
      {
        title: '交易账号',
        dataIndex: 'account',
        key: 'account',
        render: text => <a href={`/#/custom/editCustom/${text}`}>{text}</a>,
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        filters: [
          { text: '买', value: '买' },
          { text: '卖', value: '卖' },
        ],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
      },
      {
        title: '品种',
        dataIndex: 'kind',
        key: 'kind',
        filters: [
          { text: 'EURUSD', value: 'EURUSD' },
          { text: 'XAUUSD', value: 'XAUUSD' },
        ],
        filteredValue: filteredInfo.kind || null,
        onFilter: (value, record) => record.kind.includes(value),
      },
      {
        title: '成交量',
        dataIndex: 'vol',
        key: 'vol',
        sorter: (a, b) => a.vol - b.vol,
        sortOrder: sortedInfo.columnKey === 'vol' && sortedInfo.order,
      },
      {
        title: '价位',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      },
      {
        title: 'S/L',
        dataIndex: 'sl',
        key: 'sl',
        sorter: (a, b) => a.sl - b.sl,
        sortOrder: sortedInfo.columnKey === 'sl' && sortedInfo.order,
      },
      {
        title: 'T/P',
        dataIndex: 'tp',
        key: 'tp',
        sorter: (a, b) => a.tp - b.tp,
        sortOrder: sortedInfo.columnKey === 'tp' && sortedInfo.order,
      },
      {
        title: '手续费',
        dataIndex: 'commission',
        key: 'commission',
        sorter: (a, b) => a.commission - b.commission,
        sortOrder: sortedInfo.columnKey === 'commission' && sortedInfo.order,
      },
      {
        title: '隔夜利息',
        dataIndex: 'interest',
        key: 'interest',
        sorter: (a, b) => a.interest - b.interest,
        sortOrder: sortedInfo.columnKey === 'interest' && sortedInfo.order,
      },
      {
        title: '获利',
        dataIndex: 'profit',
        key: 'profit',
        render: text => <span style={{ color: `${text > 0 ? "green" : "red"}` }}>{text}</span>,
        sorter: (a, b) => a.profit - b.profit,
        sortOrder: sortedInfo.columnKey === 'profit' && sortedInfo.order,
      },
      {
        title: '下单时间',
        dataIndex: 'createtime',
        key: 'createtime',
        width: 110,
        sorter: (a, b) => a.createtime.split("-").join("") - b.createtime.split("-").join(""),
        sortOrder: sortedInfo.columnKey === 'createtime' && sortedInfo.order,
      }
    ];

    return (
      <div className="home-wrap">
        {Object.prototype.isPrototypeOf(datalist) && Object.keys(datalist).length === 0 ? 
        <Card loading={true} title={<div><span>账户({id})</span><Tag style={{ marginLeft: "5px" }} color="red">已停用</Tag></div>}
          extra={<Button type="primary">启用</Button>}></Card> 
          :
          <Card loading={loading} title={<div><span>账户({id})</span><Tag style={{ marginLeft: "5px" }} color={basicInfo.status === '启用中' ? "green" : "red"}>{basicInfo.status}</Tag></div>}
            extra={<Button type={basicInfo.status === '启用中' ? "danger" : "primary"}>{basicInfo.status === '启用中' ? "停用" : "启用"}</Button>}>
            <Card title="基本信息" className="card-wrap">
              <Row gutter={16}>
                <Col span={8}>
                  <p><span>账户状态:</span><span className="price" style={{ color: basicInfo.status === '启用中' ? "green" : "red" }}>{basicInfo.status}</span></p>
                  <p><span>账户余额:</span><span className="price">{basicInfo.balance}</span></p>
                  <p><span>保证金比率:</span><span className="price">{basicInfo.marginratio}</span></p>
                  <p><span>创建时间:</span><span className="price">{basicInfo.createtime}</span></p>
                </Col>
                <Col span={8} offset={4}>
                  <p><span>账户类型:</span><span className="price">{basicInfo.type}</span></p>
                  <p><span>账户净值:</span><span className="price">{basicInfo.netaccountvalue}</span></p>
                  <p><span>可用保证金:</span><span className="price">{basicInfo.useablemargin}</span></p>
                </Col>
              </Row>
            </Card>
            <Card title="客户信息" className="card-wrap">
              <Row gutter={16}>
                <Col span={8}>
                  <p><span>客户编号:</span><a className="price" href={`/custom/editCustom/${customerInfo.customerId}`}>{customerInfo.customerId}</a></p>
                  <p><span>出生日期:</span><span className="price">{customerInfo.birthday}</span></p>
                  <p><span>手机号码:</span><span className="price">{customerInfo.mobilePhone}</span></p>
                  <p><span>住址:</span><span className="price">{customerInfo.address}</span></p>
                </Col>
                <Col span={8} offset={4}>
                  <p><span>国籍:</span><span className="price">{customerInfo.nationality}</span></p>
                  <p><span>姓名:</span><span className="price">{customerInfo.name}</span></p>
                  <p><span>电子邮箱:</span><span className="price">{customerInfo.mail}</span></p>
                </Col>
              </Row>
            </Card>
            <Card title="交易订单" className="card-wrap">
              <Tabs defaultActiveKey="1">
                <TabPane tab="持仓单" key="1">
                  <Table columns={columns} dataSource={tradeInfo1} onChange={this.handleChange} />
                </TabPane>
                <TabPane tab="挂单" key="2">
                  <Table columns={columns} dataSource={tradeInfo2} onChange={this.handleChange} />
                </TabPane>
                <TabPane tab="平仓单" key="3">
                  <Table columns={columns} dataSource={tradeInfo3} onChange={this.handleChange} />
                </TabPane>
              </Tabs>
            </Card>
          </Card>}
      </div >
    )
  }
}

export default EditAccountId