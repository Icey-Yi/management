import React, { Component } from 'react'
import { Card, Row, Col, Form, Input, Button, Select, DatePicker } from 'antd'
import "./index.less"
import nationalityList from "../../../../config/nationalityList"


class EditCustomCreate extends Component {

  state = {
    idTypeList: ["护照", "身份证", "军官证", "居住证", "港澳通行证"],
  }

  render() {
    const { idTypeList } = this.state;
    const { Option } = Select;
    const { TextArea } = Input;
    const dateFormat = 'YYYY-MM-DD';
    const layout = {
      labelCol: { span: 24 }
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }} defaultValue="+86">
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );

    return (
      <div className="home-wrap">
          <Card title="创建客户">
            <Card title="账户类型" className="card-wrap">
              <Form {...layout}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="currency"
                      label="基本货币"
                      rules={[{ required: true }]}
                    >
                      <Select >
                        <Option value="USD">USD</Option>
                        <Option value="RMB">RMB</Option>
                        <Option value="HKD">HKD</Option>
                      </Select>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="type"
                      label="账户类型"
                      rules={[{ required: true }]}
                    >
                      <Select >
                        <Option value="个人">个人</Option>
                        <Option value="公司">公司</Option>
                        <Option value="未知">未知</Option>
                      </Select>
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="loginAccount"
                      label="登录账号(邮箱)"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="请输入账号" />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="group"
                      label="客户组"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="默认账户">默认账户</Option>
                        <Option value="账户B">账户B</Option>
                      </Select>
                    </Form.Item></Col>
                </Row>
              </Form>
            </Card>
            <Card title="基本信息" className="card-wrap">
              <Form {...layout}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="nationality"
                      label="国籍"
                      rules={[{ required: true }]}
                    >
                      <Select >
                        {nationalityList.map((item) => <Option value={item}>{item}</Option>)}
                      </Select>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="appellation"
                      label="称谓"
                      rules={[{ required: true }]}
                    >
                      <Select >
                        <Option value="先生">先生</Option>
                        <Option value="女士">女士</Option>
                      </Select>
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="name"
                      label="姓名"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="请输入姓名"/>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="birthday"
                      label="生日"
                      rules={[{ required: true }]}
                    >
                      <DatePicker  format={dateFormat} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="address"
                      label="住址"
                      rules={[{ required: true }]}
                    >
                      <Input  placeholder="请输入住址"/>
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="idtype"
                      label="证件类型"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        {idTypeList.map((item) => <Option value={item}>{item}</Option>)}
                      </Select>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="idnum"
                      label="证件号码"
                      rules={[{ required: true }]}
                    >
                      <Input  placeholder="请输入证件号码"/>
                    </Form.Item></Col>
                </Row>

              </Form>
            </Card>
            <Card title="联系信息" className="card-wrap">
              <Form {...layout}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="mobilePhone"
                      label="手机信息"
                      rules={[{ required: true }]}
                    >
                      <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="mail"
                      label="电子邮箱"
                      rules={[{ required: true }]}
                    >
                      <Input  placeholder="请输入电子邮箱" />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="fax"
                      label="传真号码"
                    >
                      <Input  placeholder="请输入传真号码"/>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="homePhone"
                      label="住宅电话"
                    >
                      <Input  placeholder="请输入住宅电话" />
                    </Form.Item></Col>
                </Row>
              </Form>
            </Card>
            <Card title="银行资料" className="card-wrap">
              <Form {...layout}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="name"
                      label="持有人姓名"
                      rules={[{ required: true }]}
                    >
                      <Input  placeholder="请输入持有人姓名" />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="bank"
                      label="银行名称"
                      rules={[{ required: true }]}
                    >
                      <Input  placeholder="请输入银行名称" />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="account"
                      label="银行账号"
                    >
                      <Input  placeholder="请输入银行账号" />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="code"
                      label="银行代码(Swift Code)"
                    >
                      <Input placeholder="请输入银行代码" />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="address"
                      label="开户行地址"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="请输入开户行地址"/>
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="remarks"
                      label="备注"
                    >
                      <TextArea />
                    </Form.Item></Col>
                </Row>
              </Form>
            </Card>
          </Card>
        <div className="toolbar">
          <div className="right">
            <Button type="primary" htmlType="submit">提交</Button>
            <Button htmlType="button" className="btn" >取消</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditCustomCreate