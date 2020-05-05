import React, { Component } from 'react'
import { Row, Col, Card, Button, Table, Form, Input, Select, DatePicker, Tooltip } from 'antd'
import { UpOutlined, DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { connect } from 'umi'
import "./index.less"

@connect(({ approvalOpen, loading }) => ({ approvalOpen, loading: loading.effects['approvalOpen/getData'] }))
class Open extends Component {
  state = {
    open: false,
    filteredInfo: null,
    sortedInfo: null,
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'approvalOpen/getData',
    })
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  closeform = () => {
    console.log(false);
    this.setState({ open: false })
  }

  openform = () => {
    console.log(true);
    this.setState({ open: true })
  }


  render() {
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { approvalOpen,loading } = this.props;
    const {data} = approvalOpen;
    const columns = [
      {
        title: '审批编号',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href={`#/approval/stepForm/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
      },
      {
        title: '账户类型',
        dataIndex: 'type',
        key: 'type',
        filters: [
          { text: '个人', value: '个人' },
          { text: '机构', value: '机构' },
        ],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
        ellipsis: true,
      },
      {
        title: '审批结果',
        dataIndex: 'result',
        key: 'result',
        filters: [
          { text: '已通过', value: '已通过' },
          { text: '审批中', value: '审批中' },
          { text: '待审批', value: '待审批' },
          { text: '未通过', value: '未通过' },
        ],
        render: text => {
          let color;
          if (text === "已通过") color = "blue";
          if (text === "审批中") color = "green";
          if (text === "待审批") color = "cyan";
          if (text === "未通过") color = "red";
          return color === "red" ? <span style={{ color: `${color}` }}>{text}
          <Tooltip placement="top" title={<span>审批未通过原因</span>}>
            <InfoCircleOutlined style={{color:"grey", fontSize:"12px", marginLeft:"2px"}}/></Tooltip></span> :
            <span style={{ color: `${color}` }}>{text}</span>
        },
        filteredValue: filteredInfo.result || null,
        onFilter: (value, record) => record.result.includes(value),
        ellipsis: true,
      },
      {
        title: '审批进度',
        dataIndex: 'progress',
        key: 'progress',
        ellipsis: true,
      },
      {
        title: '当前流程',
        dataIndex: 'process',
        key: 'process',
        ellipsis: true,
      },
      {
        title: '申请时间',
        dataIndex: 'applytime',
        key: 'applytime',
        sorter: (a, b) => (new Date(a.applytime.replace(/-/g,"\/"))) - (new Date(b.applytime.replace(/-/g,"\/"))),
        sortOrder: sortedInfo.columnKey === 'applytime' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '详情',
        dataIndex: 'details',
        key: 'details',
        render: (text, record) => <a href={`#/approval/stepForm/${record.id}`}>{text}</a>,
        ellipsis: true,
      }
    ];
    return (
      <div className="home-wrap">
        <Card style={{height:800}}>
          <div style={{marginBottom: "35px"}}>
          {this.state.open ? (
            <Form>
              <Row gutter={16}>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="id" label="审批编号: "><Input placeholder="请输入审批编号" /></Form.Item></Col>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="name" label="姓名: "><Input placeholder="请输入姓名" /></Form.Item></Col>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="type" label="账户类型: ">
                  <Select placeholder="请选择"><Option>个人</Option><Option>机构</Option></Select></Form.Item></Col>
              </Row>
              <Row gutter={16}>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="progress" label="审批进度: ">
                  <Select placeholder="请选择"><Option>已通过</Option><Option>待审批</Option><Option>未通过</Option></Select></Form.Item></Col>
                <Col md={12} sm={24} style={{ padding: "0 24px" }}>
                  <Form.Item name="time" label="申请时间: ">
                    <RangePicker />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ overflow: "hidden" }}>
                <Form.Item style={{ float: "right" }}>
                  <Button type="primary">查询</Button>
                  <Button style={{ margin: '0 8px' }}>重置</Button>
                  <a onClick={this.closeform}>收起<UpOutlined /></a>
                </Form.Item>
              </div>
            </Form>)
            :
            (<Form>
              <Row gutter={16}>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="id" label="审批编号: "><Input placeholder="请输入审批编号" /></Form.Item></Col>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}><Form.Item name="name" label="姓名: "><Input placeholder="请输入姓名" /></Form.Item></Col>
                <Col md={8} sm={24} style={{ padding: "0 24px" }}>
                  <Form.Item >
                    <Button type="primary">查询</Button>
                    <Button style={{ margin: '0 8px' }}>重置</Button>
                    <a onClick={this.openform}>展开<DownOutlined /></a>
                  </Form.Item></Col>
              </Row>
            </Form>)
          }
          </div>
          <Table loading={loading} columns={columns} dataSource={data} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Open