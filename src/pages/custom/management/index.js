import React, { Component } from 'react'
import { Link } from 'umi'
import { Card, Button, Table, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'umi'
import "./index.less"

@connect(({customManage})=>({customManage}))
class Management extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'customManage/getData'
    })
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    const { dispatch } = this.props;
    dispatch({
      type: 'customManage/handleChange',
      payload:{
        filteredInfo: filters,
        sortedInfo: sorter,
      }
    })
  };

  render() {
    const { Search } = Input;
    let { sortedInfo, filteredInfo, data, pagination } = this.props.customManage;
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
            <Link to="/custom/editCustom/create"><Button icon={<PlusOutlined />}>添加</Button></Link>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, float: "right" }}
            />
          </div>
          <Table columns={columns} dataSource={data}
          pagination={pagination} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Management