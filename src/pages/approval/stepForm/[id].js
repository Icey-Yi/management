import React, { Component } from 'react'
import { Card, Row, Col, Steps } from 'antd'

import "./index.less"


class StepFormId extends Component {

  state = {
    data: {
      "C1011000": {
        step: 3,
        accountInfo: {
          currency: "USD", type: "出金", createtime: "2018-08-11 14:32:13", group: "客户群A",
          nationality: "中国", name: "王一", birthday: "1991-11-11", address: "深圳市南山区哈罗德哈可视对讲卡萨"
        },
        bankInfo: {
          idtype: "身份证", name: "徐小松", idnum: "421011199111111111", account: "6214123456789012",
          mobilePhone: "13800001111", bank: "中国银行深圳分行南山区支行", mail: "11876344@qq.com", code: "234"
        },
      },
      "C1011001": {
        step: 0,
        accountInfo: {
          currency: "USD", type: "出金", createtime: "2018-08-18 15:37:23", group: "默认客户群",
          nationality: "中国", name: "徐小乔", birthday: "2000-11-11", address: "深圳市南山区支付宝大厦"
        },
        bankInfo: {
          idtype: "身份证", name: "徐小乔", idnum: "421011199202222222", account: "6214123456789013",
          mobilePhone: "13222222222", bank: "中国银行深圳分行南山区支行", mail: "118763455@qq.com", code: "236"
        },
      },
      "C1011002": {
        step: 3,
        accountInfo: {
          currency: "USD", type: "入金", createtime: "2018-08-18 07:23:13", group: "客户群B",
          nationality: "中国", name: "徐大乔", birthday: "2000-11-11", address: "深圳市南山区支付宝大厦"
        },
        bankInfo: {
          idtype: "身份证", name: "徐大乔", idnum: "421011199202222222", account: "6214123456789013",
          mobilePhone: "13222222222", bank: "中国银行深圳分行南山区支行", mail: "1187414325@qq.com", code: "236"
        }
      },
      "C1011003": {
        step: 3,
        accountInfo: {
          currency: "USD", type: "出金", createtime: "2018-08-18 14:32:13", group: "客户群A",
          nationality: "中国", name: "徐大乔", birthday: "2000-11-11", address: "深圳市南山区支付宝大厦"
        },
        bankInfo: {
          idtype: "身份证", name: "徐大乔", idnum: "421011199202222222", account: "6214123456789013",
          mobilePhone: "13222222222", bank: "中国银行深圳分行南山区支行", mail: "1187414325@qq.com", code: "236"
        }
      },
      "C1011004": {
        step: 1,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-16 14:32:36", group: "客户群A",
          nationality: "", name: "王五", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011005": {
        step: 0,
        accountInfo: {
          currency: "", type: "出金", createtime: "2018-08-17 10:12:00", group: "客户群B",
          nationality: "", name: "赵六", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011006": {
        step: 2,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-16 08:30:00", group: "客户群B",
          nationality: "", name: "孙奇", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011007": {
        step: 3,
        accountInfo: {
          currency: "", type: "出金", createtime: "2018-07-11 18:20:08", group: "客户群A",
          nationality: "", name: "王八", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011008": {
        step: 3,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-11 14:32:13", group: "客户群B",
          nationality: "", name: "许久", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011009": {
        step: 0,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-11 14:32:13", group: "客户群B",
          nationality: "", name: "柳石", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011010": {
        step: 3,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-11 14:32:13", group: "客户群A",
          nationality: "", name: "石艺", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011011": {
        step: 3,
        accountInfo: {
          currency: "", type: "出金", createtime: "2018-08-11 14:32:13", group: "客户群A",
          nationality: "", name: "孙健", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
      "C1011012": {
        step: 3,
        accountInfo: {
          currency: "", type: "入金", createtime: "2018-08-11 14:32:13", group: "客户群B",
          nationality: "", name: "石二", birthday: "", address: ""
        },
        bankInfo: {
          idtype: "", name: "", idnum: "", account: "",
          mobilePhone: "", bank: "", mail: "", code: ""
        },
      },
  

    }
  }





  render() {
    const { location } = this.props;
    const { data } = this.state;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    const datalist = data[id];
    const { accountInfo, bankInfo, step } = datalist;

    const { Step } = Steps;


    return (
      <div className="home-wrap">
        <Card title={`审批进度(${id})`} >
          <Steps size="small" current={step} className="step-wrap">
            <Step title="提交申请" />
            <Step title="初审" />
            <Step title="复核" />
            <Step title="完成" />
          </Steps>
          <Card title="账户信息" className="card-wrap">
            <Row gutter={16}>
              <Col span={8}>
                <p><span>基本货币:</span><span className="price">{accountInfo.currency}</span></p>
                <p><span>账户类型:</span><span className="price">{accountInfo.type}</span></p>
                <p><span>创建时间:</span><span className="price">{accountInfo.createtime}</span></p>
                <p><span>客户群:</span><span className="price">{accountInfo.group}</span></p>
              </Col>
              <Col span={8} offset={4}>
                <p><span>国籍:</span><span className="price">{accountInfo.nationality}</span></p>
                <p><span>姓名:</span><span className="price">{accountInfo.name}</span></p>
                <p><span>生日:</span><span className="price">{accountInfo.birthday}</span></p>
                <p><span>地址:</span><span className="price">{accountInfo.address}</span></p>
              </Col>
            </Row>
          </Card>
          <Card title="银行信息" className="card-wrap">
            <Row gutter={16}>
              <Col span={8}>
                <p><span>证件类型:</span><span className="price" >{bankInfo.idtype}</span></p>
                <p><span>证件号码:</span><span className="price">{bankInfo.idnum}</span></p>
                <p><span>手机号码:</span><span className="price">{bankInfo.mobilePhone}</span></p>
                <p><span>电子邮箱:</span><span className="price">{bankInfo.mail}</span></p>
              </Col>
              <Col span={8} offset={4}>
                <p><span>持有人姓名:</span><span className="price">{bankInfo.name}</span></p>
                <p><span>银行账号:</span><span className="price">{bankInfo.account}</span></p>
                <p><span>开户银行名称:</span><span className="price">{bankInfo.bank}</span></p>
                <p><span>银行代码:</span><span className="price">{bankInfo.code}</span></p>
              </Col>
            </Row>
          </Card>
        </Card>
      </div >
    )
  }
}

export default StepFormId