import React, { Component } from 'react'
import { Row, Col, Card, Button, Table, Form, Input, Select, List } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import "./index.less"

class Management extends Component {
  state = {
    select: ["栏目一", "栏目二", "栏目三", "栏目四"],
    filteredInfo: null,
    sortedInfo: null,
    data: [
      {id:"C1011000",name:"徐小松",type:"个人",phone:"13800001111",
      mail:"7821423214@qq.com",status:"启用中",registertime:"2017-07-04",details:"查看"},
      {id:"C1011001",name:"徐小乔",type:"个人",phone:"13800001111",
      mail:"7821423214@qq.com",status:"启用中",registertime:"2017-07-05",details:"查看"},
      {id:"C1011002",name:"徐大乔",type:"个人",phone:"13800001111",
      mail:"7821423214@qq.com",status:"已停用",registertime:"2017-07-06",details:"查看"}
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
        title: '客户编号',
        dataIndex: 'id',
        key: 'id',
        render:text=><a href={`/#/custom/editCustom/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
      },
      {
        title: '客户类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
      },
      {
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone',
        render: text => <span>+86 {text}</span>,
        width: 185,
        ellipsis: true,
      },
      {
        title: '电子邮箱',
        dataIndex: 'mail',
        key: 'mail',
        width: 215,
        ellipsis: true,
      },
      {
        title: '账户状态',
        dataIndex: 'status',
        key: 'status',
        filters: [
          { text: '启用中', value: '启用中' },
          { text: '已停用', value: '已停用' },
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        ellipsis: true,
      },
      {
        title: '注册时间',
        dataIndex: 'registertime',
        key: 'registertime',
        sorter: (a, b) => a.registertime.split("-").join("") - b.registertime.split("-").join(""),
        sortOrder: sortedInfo.columnKey === 'registertime' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '详情',
        dataIndex: 'details',
        key: 'details',
        render: (text, index) => <a href={`/#/custom/editCustom/${index.id}`}>{text}</a>,
        ellipsis: true,
      }
    ];
    return (
      <div className="home-wrap">
        <Card style={{ height: 550 }}>
          <div className="card-header">
            <Button icon={<PlusOutlined />}>添加</Button>
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


export default Management