import { Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Space } from 'antd'
import React, { useEffect } from 'react'

import Autocomplete from '../../../../components/AutoComplete/AutoComplete';
import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import styled from 'styled-components';

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
                            <Autocomplete 
                            placeholder='No WA'
                            suggestions={["089672537919", "087736216512", "082222353", "0821873298", "088327832874"]}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'nama'}
                            >  
                                <Input
                                    placeholder='Nama'
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
                                placeholder='Admin'
                                name={'admin'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'program'}
                            >  
                                <Input 
                                    placeholder='Program'
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
                                placeholder='Nama Bank'
                                name={'namaBank'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                    <DateWrapper>
                        <Form.Item
                            style={{width: '45%'}}
                            name={'tanggalMulai'}
                        >    
                            <DatePicker 
                                placeholder='Tanggal Mulai'
                                name={'tanggalMulai'}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            style={{width: '45%'}}
                            name={'tanggalBerakhir'}
                        >    
                            <DatePicker 
                                placeholder='Tanggal Selesai'
                                name={'tanggalBerakhir'}
                            />
                        </Form.Item>
                        </DateWrapper>
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
width: 100%;
border-radius: 6px !important;
`

const DateWrapper = styled.div`
display: flex;
gap: 10%;
`