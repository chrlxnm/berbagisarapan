import { Input as AntdInput, Button, Form, Layout,Col } from 'antd'

import {
  Button as ButtonAntd,
  Col as ColAntd,
  Form,
  Input as InputAntd,
  Row,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { Component } from "react";

import logoCB from "../../assets/images/cb-logo.svg";
import styled from 'styled-components';
import "./index.css"

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
      <Col style={{flexDirection:'row',display:'flex',justifyContent:'center', marginTop:window.innerHeight / 4}} xl={24} lg={24}>
          <Col xl={8} lg={8}>
          <Card style={{width:'50%'}}>
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
            </Col>
            <Col></Col>
            </Col>
        </Content>
      </Layout>
    </>
  )
}
export default class Login extends Component {
  render() {
    console.log('cek props', this.props)
    const onFinish = (values) => {
      console.log("Success:", values);
      this.props.setToken('true')
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <SiluetLogoWrapper>
        <SiluetLogo src={logoCB} />
        </SiluetLogoWrapper>
            <Row justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
                md={{ span: 12 }}
              >
              <img src={logoCB} alt='' className='img-core' onClick = {()=>{
              }}
              />
                <LoginTitle>Login</LoginTitle>
                <LoginSubTitle>
                Selamat datang, silahkan masuk ke akunmu
                </LoginSubTitle>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="email"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Masukkan email disini" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <InputPassword
                      placeholder="Masukkan password disini"
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      Masuk
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
      </>
    );
  }
}

const Input = styled(InputAntd)`
  border-radius: 6px;
  height: 40px;
`
const InputPassword = styled(InputAntd.Password)`
  border-radius: 6px;
  height: 40px;
`

const LoginSubTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 160%;
`
const LoginTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 160%;
margin-top: 2rem;
`

const Button = styled(ButtonAntd)`
  background: #3E903B;
  border-radius: 6px;
  height: 40px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-align: center;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #FFFFFF;
  &:hover {
    background: #76b374;
  }
`

const Col = styled(ColAntd)`
  position: absolute;
  top: 20%;
  padding: 0 1rem;
`

const SiluetLogoWrapper = styled.div`
  position: relative;
`

const SiluetLogo = styled.img`
width: 114.6px;
height: 276px;
left: 100px;
top: 0px;

opacity: 0.05;
transform: matrix(-0.83, -0.56, -0.56, 0.83, 0, 0);
  `