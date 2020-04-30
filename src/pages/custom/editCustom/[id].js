import React, { Component } from 'react'
import { Card, Row, Col, Form, Input, Button, Select, DatePicker } from 'antd'
import moment from 'moment'
import "./index.less"
import nationalityList from "../../../config/nationalityList"


class EditCustomId extends Component {

  state = {
    idTypeList: ["护照", "身份证", "军官证", "居住证", "港澳通行证"],
    data: {
      "C1011000": {
        accountType: { currency: "USD", type: "个人", loginAccount: "90019544", group: "默认账户" },
        basicInfo: {
          nationality: "中国", appellation: "先生", name: "徐小松", birthday: "1991-10-06",
          address: "深圳市南山区沙发上课付款撒谎发卡号发来设计费", idtype: "身份证", idnum: "421011199111111111"
        },
        contactInfo: { mobilePhone: "13800001111", mail: "7821423214@qq.com", fax: "435000", homePhone: "027-8888888" },
        bankInfo: {
          name: "徐小松", bank: "中国银行", account: "6214123456789012", code: "234",
          address: "中国银行深圳分行南山区支行", remarks: "备注"
        }
      },
      "C1011001": {
        accountType: { currency: "USD", type: "个人", loginAccount: "90019545", group: "账户B" },
        basicInfo: {
          nationality: "中国", appellation: "先生", name: "徐小乔", birthday: "1991-10-06",
          address: "深圳市南山区沙发上课", idtype: "身份证", idnum: "421011199202222222"
        },
        contactInfo: { mobilePhone: "13800001111", mail: "7821423214@qq.com", fax: "435000", homePhone: "027-66666666" },
        bankInfo: {
          name: "徐小乔", bank: "中国银行", account: "6214123456789013", code: "236",
          address: "中国银行深圳分行南山区支行", remarks: "备注"
        }
      },
      "C1011002": {
        accountType: { currency: "USD", type: "个人", loginAccount: "90019546", group: "默认账户" },
        basicInfo: {
          nationality: "中国", appellation: "先生", name: "徐大乔", birthday: "1991-10-06",
          address: "深圳市南山区沙发上课", idtype: "身份证", idnum: "421011199202222222"
        },
        contactInfo: { mobilePhone: "13800001111", mail: "7821423214@qq.com", fax: "435000", homePhone: "027-66666666" },
        bankInfo: {
          name: "徐大乔", bank: "中国银行", account: "6214123456789013", code: "236",
          address: "中国银行深圳分行南山区支行", remarks: "备注"
        }
      }
    }
  }

  render() {
    const { location } = this.props;
    const { data, idTypeList } = this.state;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    const datalist = data[id];
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
        {datalist ?
          <Card title={`客户信息(${id})`} loading={datalist ? false : true}>
            <Card title="账户类型" className="card-wrap">
              <Form {...layout}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="currency"
                      label="基本货币"
                      rules={[{ required: true }]}
                    >
                      <Select defaultValue={datalist.accountType.currency}>
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
                      <Select defaultValue={datalist.accountType.type}>
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
                      <Input defaultValue={datalist.accountType.loginAccount} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="group"
                      label="客户组"
                      rules={[{ required: true }]}
                    >
                      <Select defaultValue={datalist.accountType.group}>
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
                      <Select defaultValue={datalist.basicInfo.nationality}>
                        {nationalityList.map((item) => <Option value={item}>{item}</Option>)}
                      </Select>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="appellation"
                      label="称谓"
                      rules={[{ required: true }]}
                    >
                      <Select defaultValue={datalist.basicInfo.appellation}>
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
                      <Input defaultValue={datalist.basicInfo.name} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="birthday"
                      label="生日"
                      rules={[{ required: true }]}
                    >
                      <DatePicker defaultValue={moment(`${datalist.basicInfo.birthday}`, dateFormat)} format={dateFormat} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="address"
                      label="住址"
                      rules={[{ required: true }]}
                    >
                      <Input defaultValue={datalist.basicInfo.address} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="idtype"
                      label="证件类型"
                      rules={[{ required: true }]}
                    >
                      <Select defaultValue={datalist.basicInfo.idtype}>
                        {idTypeList.map((item) => <Option value={item}>{item}</Option>)}
                      </Select>
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="idnum"
                      label="证件号码"
                      rules={[{ required: true }]}
                    >
                      <Input defaultValue={datalist.basicInfo.idnum} />
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
                      <Input defaultValue={datalist.contactInfo.mobilePhone} addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="mail"
                      label="电子邮箱"
                      rules={[{ required: true }]}
                    >
                      <Input defaultValue={datalist.contactInfo.mail} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="fax"
                      label="传真号码"
                    >
                      <Input defaultValue={datalist.contactInfo.fax} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="homePhone"
                      label="住宅电话"
                    >
                      <Input defaultValue={datalist.contactInfo.homePhone} />
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
                      <Input defaultValue={datalist.bankInfo.name} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="bank"
                      label="银行名称"
                      rules={[{ required: true }]}
                    >
                      <Input defaultValue={datalist.bankInfo.bank} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="account"
                      label="银行账号"
                    >
                      <Input defaultValue={datalist.bankInfo.account} />
                    </Form.Item></Col>
                  <Col span={8} offset={4}>
                    <Form.Item
                      name="code"
                      label="银行代码(Swift Code)"
                    >
                      <Input defaultValue={datalist.bankInfo.code} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="address"
                      label="开户行地址"
                      rules={[{ required: true }]}
                    >
                      <Input defaultValue={datalist.bankInfo.address} />
                    </Form.Item></Col>
                </Row>
                <Row gutter={16}>
                  <Col span={14}>
                    <Form.Item
                      name="remarks"
                      label="备注"
                    >
                      <TextArea defaultValue={datalist.bankInfo.remarks} />
                    </Form.Item></Col>
                </Row>
              </Form>
            </Card>
          </Card> :  <Card title={`客户信息(${id})`} loading={datalist ? false : true}></Card>}
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

export default EditCustomId