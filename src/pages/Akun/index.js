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
                style={{width: '35%'}}
                layout="vertical"
                requiredMark={'optional'}
                >
                  <Form.Item
                    name="nama"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan nama anda!",
                      },
                    ]}
                  >
                    <Label>Nama</Label>
                    <Input name='nama' placeholder="Masukkan nama disini" />
                  </Form.Item>
                  <Form.Item
                    style={{marginTop: '1rem'}}
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan username anda!",
                      },
                    ]}
                  > 
                    <Label>Username</Label>
                    <Input placeholder="Masukkan username disini" />
                  </Form.Item>
                  <Form.Item
                    style={{marginTop: '1rem'}}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan email anda!",
                      },
                    ]}
                  >
                    <Label>Email</Label>
                    <Input placeholder="Masukkan email disini" />
                  </Form.Item>
                  <Form.Item
                    style={{marginTop: '1rem'}}
                    name="noHP"
                    rules={[
                      {
                        required: true,
                        message: "Mohon masukkan nomor HP anda!",
                      },
                    ]}
                  >
                    <Label>Nomor HP</Label>
                    <Input placeholder="Masukkan nomor HP disini" />
                  </Form.Item>
                    <ButtonPrimary 
                    htmlType='submit'
                    style={{ width: "100%", marginTop: '2rem' }}>
                    Simpan
                    </ButtonPrimary>
                </Form>
              </Row>
          </Card>
      );
}

export default Akun

const Input = styled(InputAntd)`
  border-radius: 6px;
  height: 40px;
`

const Label = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 100%;
/* or 22px */

font-feature-settings: 'tnum' on, 'lnum' on;

/* Hitam */

color: #2C2C2C;
`