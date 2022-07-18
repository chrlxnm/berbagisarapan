import './style.css';

import {
  Button as ButtonAntd,
  Col as ColAntd,
  Form,
  Input as InputAntd,
  Row,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { app } from '../../services/firebase';
import logoCB from "../../assets/images/cb-logo.svg";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
export default class Login extends Component {
  render() {
    const onFinish = (values) => {
    const authentication = getAuth();
        try {
        signInWithEmailAndPassword(authentication, values.email, values.password)
            .then((response) => {console.log(response)
                this.props.setUserInfo(response.user)
            })
        }
        catch (err) {
            console.log(err)
        }
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <SiluetLogoWrapper>
        <SiluetLogo src={logoCB} />
        </SiluetLogoWrapper>
        <SiluetLogoWrapper2>
        <SiluetLogo2 src={logoCB} />
        </SiluetLogoWrapper2>
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
                  requiredMark={'optional'}
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
                    style={{marginTop: '1rem'}}
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
line-height: 100%;
color: #4F4F4F;
`
const LoginTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 100%;
margin-top: 2rem;
color: #2C2C2C;
`

const Button = styled(ButtonAntd)`
  background: #3E903B;
  border-radius: 6px;
  height: 40px;
  margin-top: 1rem;

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
  &:focus {
    background: #3E903B !important;
  }
`

const Col = styled(ColAntd)`
  position: absolute;
  top: 10%;
  padding: 0 1rem;
`

const SiluetLogoWrapper = styled.div`
  position: absolute;
`
const SiluetLogoWrapper2 = styled.div`
position: fixed;
top: unset;
left: unset;
right: -20vh;
bottom: 0;
`

const SiluetLogo = styled.img`
position: absolute;
width: 465px;
height: 255px;
left: -160.9px;
top: 21.1px;

opacity: 0.1;
transform: rotate(132.75deg);
  `
const SiluetLogo2 = styled.img`
width: 465px;
height: 255px;

opacity: 0.1;
transform: rotate(-47.25deg);
    `