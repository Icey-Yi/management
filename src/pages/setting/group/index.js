import React, { Component } from 'react'
import { Row, Col, Modal, Card, Button, Table, Form, Input, Select, List } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import "./index.less"

class Role extends Component {
  state = {
    loading: false,
    visible: false,
    filteredInfo: null,
    sortedInfo: null,
    data: [
      {
        id: "C1011000", name: "王一", permission: "超级管理员",  status: "启用", phone: "13111111111",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011001", name: "李二", permission: "客服",  status: "启用", phone: "13222222222",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011002", name: "张三", permission: "审核专员", status: "启用", phone: "13133333333",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011003", name: "李四", permission: "管理员", status: "已停用", phone: "13144444444",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011004", name: "王五", permission: "操作员", status: "已停用", phone: "13155555555",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011005", name: "赵六", permission: "超级管理员", status: "启用", phone: "13143243252",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011006", name: "刘琦", permission: "操作员", status: "启用", phone: "15987601234",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011007", name: "王八", permission: "操作员", status: "已停用", phone: "18186228411",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011008", name: "许久", permission: "管理员", status: "启用", phone: "18996708755",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011009", name: "益十", permission: "操作员", status: "启用", phone: "15915915999",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C10110010", name: "石艺", permission: "审核专员", status: "启用", phone: "18186996722",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011011", name: "石二", permission: "操作员", status: "已停用", phone: "13188888888",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011012", name: "徐大桥", permission: "审核专员", status: "启用", phone: "13111111111",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C10110001", name: "徐小乔", permission: "操作员", status: "启用", phone: "13288888888",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011000", name: "刘大秦", permission: "客服", status: "启用", phone: "13388888888",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011000", name: "刘晓琴", permission: "操作员", status: "启用", phone: "13488888888",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011000", name: "宋大志", permission: "客服", status: "启用", phone: "13588888888",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
      {
        id: "C1011000", name: "宋孝智", permission: "超级管理员", status: "启用", phone: "13612345678",
        mail: "11876344@qq.com", addtime: "2018-08-11 14:32:13", details: "查看"
      },
    ],
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
    const { visible, loading } = this.state;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

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
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
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
          <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}


export default Role