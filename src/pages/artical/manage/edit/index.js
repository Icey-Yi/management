import React, { Component } from 'react'
import { Row, Col, Card, Button, Table, Form, Input, Select, List } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import "./index.less"

class Edit extends Component {
  state = {
    select: ["栏目一", "栏目二", "栏目三", "栏目四"],
    filteredInfo: null,
    sortedInfo: null,
    data: [
      {
        id: 0, title: "大理石发烧反复拉锯拉法基领导那里风景阿拉斯加发积分大黄蜂绝对是封闭式的范德萨", type: "栏目一",
        source: "Xu Qingsong", publishtime: "2017-07-04 08:00:00", createtime: "2017-07-13 08:00:00", details: "查看"
      },
      {
        id: 1, title: "大理石发烧反复拉锯拉法基领导那里风景阿拉斯加发积分大黄蜂绝对是封闭式的范德萨", type: "栏目一",
        source: "Xu Qingsong", publishtime: "2017-07-04 08:00:00", createtime: "2017-07-13 08:00:00", details: "查看"
      },
      {
        id: 2, title: "大理石发烧反复拉锯拉法基领导那里风景阿拉斯加发积分大黄蜂绝对是封闭式的范德萨", type: "栏目一",
        source: "Xu Qingsong", publishtime: "2017-07-04 08:00:00", createtime: "2017-07-13 08:00:00", details: "查看"
      },
      {
        id: 3, title: "大理石发烧反复拉锯拉法基领导那里风景阿拉斯加发积分大黄蜂绝对是封闭式的范德萨", type: "栏目一",
        source: "Xu Qingsong", publishtime: "2017-07-04 08:00:00", createtime: "2017-07-13 08:00:00", details: "查看"
      },
      {
        id: 4, title: "大理石发烧反复拉锯拉法基领导那里风景阿拉斯加发积分大黄蜂绝对是封闭式的范德萨", type: "栏目一",
        source: "Xu Qingsong", publishtime: "2017-07-04 08:00:00", createtime: "2017-07-13 08:00:00", details: "查看"
      },
    ]

  }


  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
    const { Option } = Select;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 320,
        ellipsis: true,
      },
      {
        title: '栏目',
        dataIndex: 'type',
        key: 'type',
        filters: [
          { text: '栏目一', value: 'one' },
          { text: '栏目二', value: 'two' },
          { text: '栏目三', value: 'three' },
          { text: '栏目四', value: 'four' },
        ],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
        ellipsis: true,
      },
      {
        title: '发表人',
        dataIndex: 'source',
        key: 'source',
        ellipsis: true,
      },
      {
        title: '发表时间',
        dataIndex: 'publishtime',
        key: 'publishtime',
        sorter: (a, b) => a.balance.split(",").join("") - b.balance.split(",").join(""),
        sortOrder: sortedInfo.columnKey === 'publishtime' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '创建时间',
        dataIndex: 'createtime',
        key: 'createtime',
        sorter: (a, b) => a.netaccountvalue.split(",").join("") - b.netaccountvalue.split(",").join(""),
        sortOrder: sortedInfo.columnKey === 'createtime' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '详情',
        dataIndex: 'details',
        key: 'details',
        render: (text, index) => <a href={`/#/artical/manage/create/${index.id}`}>{text}</a>,
        ellipsis: true,
      }
    ];
    return (
      <div className="home-wrap">
        <Card style={{ height: 550 }}>
          <Form>
            <Row gutter={16}>
              <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="id" label="规则编号: "><Input placeholder="请输入" /></Form.Item></Col>
              <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="select" label="栏目: " >
                <Select defaultValue={this.state.select[0]}>
                  {this.state.select.map((item, index) => (<Option key={index} value={index}>{item}</Option>))}
                </Select>
              </Form.Item></Col>
              <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item >
                <Button type="primary">查询</Button>
                <Button style={{ marginLeft: '8px' }}>重置</Button>
              </Form.Item></Col>
            </Row>
          </Form>
          <Button icon={<PlusOutlined />} style={{ color: "#1890ff", borderColor: "#1890ff" }}>新建</Button>
          <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Edit