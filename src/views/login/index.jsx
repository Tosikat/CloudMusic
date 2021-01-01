import React, {memo, useState} from 'react'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {
  getLoginInfoAction
} from './store/actionCreator'
import {
  LoginDiv
} from './style'

const Login = memo(function () {
  const [win, setWin] = useState(0);
  const [info] = useState({});
  console.log(win)

  const { userInfo } =  useSelector(  state => ({
      userInfo:  state.getIn(['userInfo', 'UserInfo'])
  }), shallowEqual);

  const token = localStorage.getItem('csrf_token');
  console.log(token)

  const dispatch = useDispatch();
   function onFinish(values) {
    console.log('Received values of form: ', values);
    info.phone = values.username;
    info.password = values.password;
    dispatch(getLoginInfoAction(info.phone, info.password))
  }

  console.log(userInfo)
  return (
    <LoginDiv>
      <a href={'#/discover/recommend'}
         className={'loginBtn'}
         onClick={e => setWin(1)}
        >登录</a>

      <div className={'alert_win'}
           style={{display: win ? 'block': 'none'}}>

        <div className={'login_bar'}>
          <span>登录</span>
          <span className={'close'}
                onClick={ e => setWin(0)}>X</span>
        </div>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                pattern: /^1(3[0-9]|5[012356789]|7[1235678]|8[0-9])\d{8}$/,
                message: '请输入正确的手机号格式!'
              },
            ]}
          >
            <Input prefix={
              <UserOutlined
                    className="site-form-item-icon"
                  />}
                   placeholder="请输入手机号"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                pattern: /^.{6,16}$/,
                message: '请输入大于6位数的密码!',
              },
            ]}
          >
            <Input
              prefix= {
                <LockOutlined className="site-form-item-icon" />
              }
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>

          <Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我！</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#/">
              忘记密码？
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>

    </LoginDiv>
  )
})
export default Login;
