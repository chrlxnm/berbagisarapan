import { Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Select as SelectAntd, Space } from 'antd'
import { OPTION_ADMIN, OPTION_KATEGORI } from '../../../../helpers/constants';
import React, { useEffect } from 'react'

import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import styled from 'styled-components';

const { Option } = SelectAntd;

function FilterModal({visible,handleCancel,handleOk, title}) {
    const [form] = Form.useForm();

    return (
    <Modal 
    isModalVisible={visible}
    handleOk={handleOk}
    title={'Filter'}
    handleCancel={()=>{
        form.resetFields()
        handleCancel()}}>
        <Form 
        form={form}
        onFinish={()=>{
            handleOk()
        }}
        onFinishFailed={(e)=>{
            console.log(e)
        }}>
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
                        >    
                            <Input 
                                name={'noWA'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'nama'}
                            >  
                                <Input 
                                    name={'nama'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Admin</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Program</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'admin'}
                        >    
                            <Input 
                                name={'admin'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'program'}
                            >  
                                <Input 
                                    name={'program'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Nama Bank</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Tanggal</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'namaBank'}
                        >    
                            <Input
                                name={'namaBank'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                    <Space>
                        <Form.Item
                            name={'tanggalMulai'}
                        >    
                            <DatePicker 
                                name={'tanggalMulai'}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            name={'tanggalBerakhir'}
                        >    
                            <DatePicker 
                                name={'tanggalBerakhir'}
                            />
                        </Form.Item>
                        </Space>
                    </Col>
                </Row> 
                <Row justify='center'>
                    <ButtonPrimary htmlType='submit'>
                        Terapkan
                    </ButtonPrimary>
                </Row>
            </Form>
    </Modal>
  )
}

export default FilterModal

const Input = styled(InputAntd)`
height: 40px !important;
  border-radius: 6px !important;
`

const DatePicker = styled(DatePickerAntd)`
height: 40px !important;
border-radius: 6px !important;
`