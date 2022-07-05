import { Col, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import { OPTION_IS_ACTIVE, OPTION_LEVEL_ADMIN, OPTION_SEX } from '../../../../helpers/constants';
import React, { useEffect } from 'react'

import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import styled from 'styled-components';

const { Option } = SelectAntd;

function AddModal({visible,handleCancel,handleOk, title, data}) {
    const [form] = Form.useForm();
    
    useEffect(()=>{
        if(data){
        form.setFieldsValue({
            name: data?.name,
            username: data?.username,
            email: data?.email,
            mobilePhone: data?.mobilePhone,
            sex: data?.sex,
            division: data?.division,
            team: data?.team,
            class: data?.class,
            levelAdmin: data?.levelAdmin,
            isActive: data?.isActive,
        })}
    },[data])

  return (
    <Modal 
    isModalVisible={visible}
    handleOk={handleOk}
    title={title}
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
                            <h3 className='labelField'>Name</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Username</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'name'}
                            rules={[{ required: true, message: 'Please fill agama' }]}
                        >    
                            <Input 
                                name={'name'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'username'}
                                rules={[{ required: true, message: 'Please fill hobi' }]}
                            >  
                                <Input 
                                    name={'username'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Email</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Mobile Phone</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'email'}
                            rules={[{ required: true, message: 'Please fill kota' }]}
                        >    
                            <Input 
                                disabled={data}
                                name={'email'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'mobilePhone'}
                                rules={[{ required: true, message: 'Please fill alamat' }]}
                            >  
                                <Input 
                                    name={'mobilePhone'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Sex</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Division</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'sex'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Select 
                                name={'sex'}
                                options = {OPTION_SEX}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'division'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Input 
                                name={'division'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Team</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Class</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'team'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Input 
                                name={'team'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'class'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Input 
                                name={'class'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Level Admin</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Is Active</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'levelAdmin'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Select 
                                options={OPTION_LEVEL_ADMIN}
                                name={'levelAdmin'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'isActive'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Select 
                                options={OPTION_IS_ACTIVE}
                                name={'isActive'}
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
  &.ant-select-single.ant-select-show-arrow .ant-select-selection-item, 
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    align-self: center;
  }
`

const Input = styled(InputAntd)`
height: 40px !important;
  border-radius: 6px !important;
`