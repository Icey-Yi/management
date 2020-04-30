import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Logo from './../../images/logo-ant.svg'
import './index.less'

class Login extends Component {

  render() {

    const onFinish = values => {
      console.log('Received values of form: ', values);
    };

    return (
      <div className="login-wrap">
        <div className="login-header">
          <img src={Logo} /><span>CRM-Manager管理后台</span>
        </div>
        <div className="login-content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <span>用户名</span>
            <Form.Item
              className="form-item"
              name="username"
              rules={[{required: true, message: 'Please input your Username!'}]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="admin/user" />
            </Form.Item>
            <span>密码</span>
            <Form.Item
              className="form-item"
              name="password"
              rules={[{required: true, message: 'Please input your Password!'}]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="888888/123456"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="login-forget">
          <a className="login-form-forgot" href="">忘记密码？</a>
        </div>
      </div>
    )
  }
}


export default Login