import { Input as AntdInput, Button, Form, Layout } from 'antd'

import { ButtonWrapper } from '../../components/Wrapper';
import Card from '../../components/Card';
import React from 'react'
import styled from 'styled-components';

const { Content } = Layout

function LoginPage() {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
  return (
  <>
  <Layout className={'content-homepage'}>
      <Content className="content-page">
        <Card>
            <h2>Login Page</h2>
            <Form
            {...layout}
            form={form}
            name="central-hooks"
            autoComplete="off">
              <Form.Item name={'username'} label='Username'>
                  <Input />
              </Form.Item>
              <Form.Item name={'password'} label='Password'>
                  <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <ButtonWrapper>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </ButtonWrapper>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  )
}

export default LoginPage

const Input = styled(AntdInput)`
  height: 30px;
  background: #ffffff;
  font-size: 16px !important;
  color: #444f5c;
  border-radius: 4px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px !important;
  }
  :-ms-input-placeholder {
    font-size: 16px !important;
  }
`;