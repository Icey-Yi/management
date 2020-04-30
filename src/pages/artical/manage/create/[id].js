import React, { Component } from 'react'
import { Card, Form, Input, Button, Select, DatePicker } from 'antd'
import "./index.less"

class CreateId extends Component {
  render() {
    const { Option } = Select;
    return (
      <div className="home-wrap">
       <Card  
       style={{ height: 550 }}  title="创建文章">
       <Form>
       <Form.Item
          name="type"
          label="栏目"
          labelAlign="left"
          labelCol={{xs:24,sm:2}}
          wrapperCol={{xs:24, sm:5}}
        >
          <Select>
            <Option value="栏目一">栏目一</Option>
            <Option value="栏目二">栏目二</Option>
            <Option value="栏目三">栏目三</Option>
            <Option value="栏目四">栏目四</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="标题"
          labelAlign="left"
          labelCol={{xs:24,sm:2}}
          wrapperCol={{xs:24, sm:20}}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="内容"
          labelAlign="left"
          labelCol={{xs:24,sm:2}}
          wrapperCol={{xs:24, sm:20}}
        >
          <Input defaultValue="welcome to wangEidtor"/>
        </Form.Item>
        <Form.Item
          name="time"
          label="发表时间"
          labelAlign="left"
          labelCol={{xs:24,sm:2}}
          wrapperCol={{xs:24, sm:4}}
        >
          <DatePicker allowClear/>
        </Form.Item>
        <Form.Item
          wrapperCol={{offset: 8,span: 16}}
        >
        <Button type="primary" >保存</Button>
        <Button htmlType="button" className="btn">取消</Button>
        </Form.Item>
        </Form>
        </Card>
      </div>
    )
  }
}
export default CreateId