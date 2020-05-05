import React, { Component } from 'react'
import { Card, Row, Col, Steps } from 'antd'
import { connect } from 'umi'
import "./index.less"

@connect(({ stepForm, loading }) => ({ stepForm, loading: loading.effects['stepForm/getData'] }))
class StepFormId extends Component {

  componentDidMount(){
    const { location, dispatch } = this.props;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    dispatch({
      type:'stepForm/getData',
      payload:{id}
    })
  }


  render() {
    const { location, stepForm, loading } = this.props;
    const { data } = stepForm;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    const accountInfo = data.accountInfo || {};
    const bankInfo = data.bankInfo || {};
    const step = data.step || {};
    const { Step } = Steps;

    return (
      <div className="home-wrap">
        <Card title={`审批进度(${id})`} loading={loading}>
          <Steps size="small" current={step} className="step-wrap">
            <Step title="提交申请" />
            <Step title="初审" />
            <Step title="复核" />
            <Step title="完成" />
          </Steps>
          <Card title="账户信息" className="card-wrap" loading={loading}>
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
          <Card title="银行信息" className="card-wrap" loading={loading}>
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