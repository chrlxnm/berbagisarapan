import { Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import React, { useState } from 'react'

import Autocomplete from '../../../../components/AutoComplete/AutoComplete';
import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import { OPTION_ADMIN, OPTION_WA } from '../../../../helpers/constants';
import styled from 'styled-components';
import { requiredMark } from '../../../../components/customRequiredMark';

function AddModal({visible,handleCancel,handleOk, title}) {
    const [form] = Form.useForm();
    const onSelectWA = (record) => {
        form.setFieldsValue({
            nama: record?.nama,
            admin: record?.admin,
        })
    }
    
  return (
    <Modal 
    isModalVisible={visible}
    handleOk={form.resetFields()}
    title={title}
    handleCancel={()=>{
        form.resetFields()
        handleCancel()}}>
         <Form 
        form={form}
        onFinish={(e)=>{
            let data = {...e,
                tanggal:e?.tanggal?.format('DD-MM-YYYY')
            }
            form.resetFields()
            handleOk(data)
        }}
        onFinishFailed={(e)=>{
            console.log(e)
        }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>No WA{requiredMark}</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Nama{requiredMark}</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}> 
                        <Autocomplete
                            placeholder='No WA'
                            name='noWA'
                            options={OPTION_WA()}
                            onSelect = {(_, record) => onSelectWA(record) }
                        />
                   
                    </Col>
                    
                    <Col className='rightSide' span={12}>
                        <Form.Item
                                name={'nama'}
                                rules={[{ required: true, message: 'Please fill nama' }]}
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
                            <h3 className='labelField'>Laporan{requiredMark}</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Tanggal{requiredMark}</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'laporan'}
                            rules={[{ required: true, message: 'Please fill laporan' }]}
                        >    
                            <Input
                                placeholder='Laporan'
                                name={'laporan'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' span={12}>
                        <Form.Item
                                name={'tanggal'}
                                rules={[{ required: true, message: 'Please fill tanggal' }]}
                            >  
                                <DatePicker 
                                    placeholder='Tanggal'
                                    name={'tanggal'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Admin{requiredMark}</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'admin'}
                            rules={[{ required: true, message: 'Please fill admin' }]}
                        >    
                            <Select
                                placeholder='Admin'
                                name={'admin'}
                                options={OPTION_ADMIN}
                            />
                        </Form.Item>
                   
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

const DatePicker = styled(DatePickerAntd)`
height: 40px !important;
width: 100%;
border-radius: 6px !important;
`