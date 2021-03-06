import { Col, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'

import { ButtonPrimary } from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal'
import React from 'react'
import styled from 'styled-components';

const { Option } = SelectAntd;

function AddModal({visible,handleCancel,handleOk, title}) {
    const [form] = Form.useForm();
  return (
    <Modal 
    isModalVisible={visible}
    handleOk={handleOk}
    title={title}
    handleCancel={()=>{
        form.resetFields()
        handleCancel()}}>
        <Form form={form}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>No WA</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Nama</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'noWA'}
                            rules={[{ required: true, message: 'Please fill agama' }]}
                        >    
                            <Input 
                                name={'noWA'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'nama'}
                                rules={[{ required: true, message: 'Please fill hobi' }]}
                            >  
                                <Input 
                                    name={'nama'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Tanggal</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Donasi</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'tanggal'}
                            rules={[{ required: true, message: 'Please fill kota' }]}
                        >    
                            <Input 
                                name={'tanggal'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'donasi'}
                                rules={[{ required: true, message: 'Please fill alamat' }]}
                            >  
                                <Input 
                                    name={'donasi'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Program</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>URL Bukti</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'program'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Input 
                                name={'program'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'url'}
                                rules={[{ required: true, message: 'Please fill totalDonasi' }]}
                            >  
                                <Input 
                                    name={'url'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Nama Bank</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Admin</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'namaBank'}
                            rules={[{ required: true, message: 'Please fill Date Added' }]}
                        >    
                            <Input 
                                name={'namaBank'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'admin'}
                                rules={[{ required: true, message: 'Please fill Program Favorit' }]}
                            >  
                                <Input 
                                    name={'admin'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify='center'>
                    <ButtonPrimary onClick={handleOk}>
                        Terapkan
                    </ButtonPrimary>
                </Row>
            </Form>
    </Modal>
  )
}

export default AddModal


const Select = styled(SelectAntd)`
  width: 100% !important;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    height: 40px !important;
    border-radius: 6px !important;
  }
`

const Input = styled(InputAntd)`
height: 40px !important;
  border-radius: 6px !important;
`