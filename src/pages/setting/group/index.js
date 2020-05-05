import React, { Component } from 'react'
import { Modal, Card, Button, Table, Form, Input, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi'
import "./index.less"

@connect(({ settingGroup, loading }) => ({ settingGroup, loading: loading.effects['settingGroup/getData'] }))
class Role extends Component {
  state = {
    visible: false,
    filteredInfo: null,
    sortedInfo: null,
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'settingGroup/getData',
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
    const { Search } = Input;
    const { Option } = Select;
    const { visible } = this.state;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { settingGroup, loading } = this.props;

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const layout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    };

    const columns = [
      {
        title: '员工编号',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href={`/#/custom/editCustom/${text}`}>{text}</a>,
        ellipsis: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
      },
      {
        title: '权限',
        dataIndex: 'permission',
        key: 'permission',
        ellipsis: true,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        filters: [
          { text: '启用', value: '启用' },
          { text: '已停用', value: '已停用' },
        ],
        render: text => text === "启用" ? <span style={{ color: "green" }}>{text}</span> :
            <span style={{ color: "red" }}>{text}</span>,
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        ellipsis: true,
      },
      {
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone',
        ellipsis: true,
      },
      {
        title: '电子邮箱',
        dataIndex: 'mail',
        key: 'mail',
        ellipsis: true,
      },
      {
        title: '添加时间',
        dataIndex: 'addtime',
        key: 'addtime',
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
        <Card style={{ height: 770 }}>
          <div className="card-header">
            <Button type="primary" icon={<PlusOutlined />} onClick={this.showModal}>新建角色</Button>
            <Modal visible={visible} title="添加新栏目" onOk={this.handleOk}
              onCancel={this.handleCancel} bodyStyle={{ borderRadius: '4px' }}
              footer={[<Button key="back" onClick={this.handleCancel}>Cancle</Button>,
              <Button key="submit" type="primary" loading={false} onClick={this.handleOk}>
                OK</Button>]}>
              <Form {...layout} name="basic" initialValues={{ remember: true }}
                onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="角色名称" name="name" rules={[{ required: true }]}>
                  <Select allowClear>
                    <Option value="1">超级管理员</Option>
                    <Option value="2">客服</Option>
                    <Option value="3">审核专员</Option>
                    <Option value="4">管理员</Option>
                    <Option value="5">操作员</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="角色描述" name="decription" hasFeedback
                  rules={[
                    { required: true },
                    () => ({
                      validator(rule, value) {
                        if (value.length > 5) {
                          return Promise.resolve();
                        }
                        return Promise.reject('请输入至少五个字符的栏目描述！');
                      }
                    })
                  ]}>
                  <Input.TextArea placeholder="请输入至少五个字符" style={{ height: '80px' }} />
                </Form.Item>
              </Form>
            </Modal>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, float: "right" }}
            />
          </div>
          <Table loading={loading} columns={columns} dataSource={settingGroup.data} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Role