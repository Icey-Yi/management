import React, { Component } from 'react'
import { Card, Table, Input } from 'antd'
import "./index.less"

class Account extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: [
      {account:90019544,id:"C1011000",group:"Group A",status:"启用中",balance:"200.00",netaccountvalue:"50,000.00",
      marginratio:"10%",useablemargin:"1,452.42",createtime:"2017-07-04",details:"查看"},
      {account:90019545,id:"C1011001",group:"Group B",status:"启用中",balance:"10.00",netaccountvalue:"200.00",
      marginratio:"10%",useablemargin:"0",createtime:"2017-07-05",details:"查看"},
      {account:90019546,id:"C1011002",group:"Group B",status:"已停用",balance:"0.00",netaccountvalue:"0",
      marginratio:"10%",useablemargin:"0",createtime:"2017-07-06",details:"查看"},
    ],
    pagination:{
      defaultCurrent: 1,
      defaultPageSize: 10,
      pageSizeOptions: ['10','20','30','40'],
      total: 50,
      showSizeChanger: true,
      showQuickJumper: true,
    }
  }


  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
    const { Search } = Input;

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '交易账号',
        dataIndex: 'account',
        key: 'account',
        render: text=><a href={`/#/custom/editCustom/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '客户编号',
        dataIndex: 'id',
        key: 'id',
        render:text=><a href={`/#/custom/editCustom/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '分组',
        dataIndex: 'group',
        key: 'group',
        filters: [
          { text: 'Group A', value: 'Group A' },
          { text: 'Group B', value: 'Group B' },
          { text: 'Group C', value: 'Group C' },
        ],
        filteredValue: filteredInfo.group || null,
        onFilter: (value, record) => record.group.includes(value),
        ellipsis: true,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render:text=>
          text==="启用中"?<span style={{color:"green"}}>{text}</span>:<span style={{color:"red"}}>{text}</span>,
        filters: [
          { text: '启用中', value: '启用中' },
          { text: '已停用', value: '已停用' },
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        ellipsis: true,
      },
      {
        title: '余额',
        dataIndex: 'balance',
        key: 'balance',
        sorter: (a, b) => a.balance - b.balance,
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
        title: '创建时间',
        dataIndex: 'createtime',
        key: 'createtime',
        sorter: (a, b) => a.createtime.split("-").join("") - b.createtime.split("-").join(""),
        sortOrder: sortedInfo.columnKey === 'createtime' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '详情',
        dataIndex: 'details',
        key: 'details',
        render: (text, index) => <a href={`/#/custom/editCustom/${index.account}`}>{text}</a>,
        ellipsis: true,
      }
    ];
    return (
      <div className="home-wrap">
        <Card style={{ height: 550 }}>
          <div className="card-header">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, float: "right" }}
            />
          </div>
          <Table columns={columns} dataSource={this.state.data}
          pagination={this.state.pagination} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Account