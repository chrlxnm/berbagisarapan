import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button as ButtonAntd, Card, Form, Input as InputAntd, Pagination, Row } from 'antd';
import { ButtonFilter, WrapperPagination, WrapperSearchFilter, WrapperSelect } from './styled';
import { ButtonPrimary, ButtonSecondary } from '../../components/Button/Button';

import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import React from 'react'
import styled from 'styled-components';

const Akun = () => {
  const [form] = Form.useForm();
      return (
          <Card className="home" style={{ borderRadius:16}}>
              <HeaderTitle title={"Akun"} subTitle={"Akun"} />
              <Row className="form-row" xl={24} justify={'center'} style={{marginTop: '2rem'}}>
                <Form 
                form={form}
                style={{width: '50%'}}
                layout="vertical"
                requiredMark={'optional'}>
                  <Form.Item
                    label="Nama"
                    name="nama"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan nama anda!",
                      },
                    ]}
                  >
                    <Input placeholder="Masukkan nama disini" />
                  </Form.Item>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan username anda!",
                      },
                    ]}
                  >
                    <Input placeholder="Masukkan username disini" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan email anda!",
                      },
                    ]}
                  >
                    <Input placeholder="Masukkan email disini" />
                  </Form.Item>
                  <Form.Item
                    label="Nomor HP"
                    name="noHP"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan nomor HP anda!",
                      },
                    ]}
                  >
                    <Input placeholder="Masukkan nomor HP disini" />
                  </Form.Item>
                  
                  <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      Simpan
                    </Button>
                </Form>
              </Row>
          </Card>
      );
}

export default Akun


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
`

const Input = styled(InputAntd)`
  border-radius: 6px;
  height: 40px;
`