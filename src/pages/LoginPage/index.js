import { Button, Form, Input, Layout } from 'antd'

import React from 'react'

const { Content } = Layout

function LoginPage() {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
  return (<>
    <Layout className={'content-homepage'}>
        <Content className="content-page">
    <div>LoginPage</div>
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </Content>
    </Layout>
    </>
  )
}

export default LoginPage