import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Input, Select, List } from 'antd'
import { PlusOutlined, ArrowUpOutlined, ArrowDownOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'umi'
import "./index.less"

@connect(({articalColumn})=>({articalColumn}))
class Column extends Component {
  state = {
    loading: false,
    visible: false,
  }
  
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'articalColumn/getData'
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

  render() {
    const { data } = this.props.articalColumn;
    const { visible, loading } = this.state;
    const { Option } = Select;

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
    return (
      <div className="home-wrap">
        <Card title="文章栏目" style={{ height: 550 }}>
          <Button block type="dashed"
            icon={<PlusOutlined />} onClick={this.showModal}>添加</Button>
          <Modal visible={visible} title="添加新栏目" onOk={this.handleOk}
            onCancel={this.handleCancel} bodyStyle={{ borderRadius: '4px' }}
            footer={[<Button key="back" onClick={this.handleCancel}>Cancle</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              OK</Button>]}>
            <Form {...layout} name="basic" initialValues={{ remember: true }}
              onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item label="栏目名" name="username" rules={[{ required: true }]}>
                <Select allowClear>
                  <Option value="1">栏目名一</Option>
                  <Option value="2">栏目名二</Option>
                  <Option value="3">栏目名三</Option>
                  <Option value="4">栏目名四</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="栏目描述" name="decription" hasFeedback
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
          <List
            className="list"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Row  style={{width:'100%'}}>
                  <Col span={3}>{item.title1}:</Col>
                  <Col span={6}><Select defaultValue={item.defaultValue} style={{ width: 120 }}>
                    {item.select && item.select.map((item, index) => <Option key={index} value={index}>{item}</Option>)}
                  </Select></Col>
                  <Col span={3}>{item.title2}:</Col>
                  <Col span={6}><Input defaultValue={`这是${item.defaultValue}`} /></Col>
                  <Col span={6}>
                    <Button className="button" ><ArrowUpOutlined /></Button>
                    <Button className="button"><ArrowDownOutlined /></Button>
                    <Button className="button"><DeleteOutlined /></Button>
                  </Col>

                </Row>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}


export default Column