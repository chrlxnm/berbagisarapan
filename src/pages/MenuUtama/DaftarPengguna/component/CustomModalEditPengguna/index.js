import './styles.css';
import '../../styled.js'

import { Col, Divider, Form, Input, InputNumber, Modal, Radio, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import { Label } from '../../../../../components';
import { WrapperSelectWithHeight } from "../../styled.js";

const CustomModalEditPengguna = ({
    title,
    isVisible,
    handleCancel,
    content,

}) => {
    const [defaultValue,setDefaultValue] = useState(content)
    const [form] = Form.useForm();
    const {Option} = Select
    const style = { background: '#0092ff', padding: '8px 0' };

    useEffect(()=>{
        setDefaultValue(content)
        console.log('1')
    },[content])

    useEffect(()=>{
        form.setFieldsValue(content)
    },[defaultValue])


    return (
        console.log(defaultValue.name),
        <Modal
            className='modal-pengguna'
            title={<h3 style={{fontWeight:'bold'}}>{title}</h3>}
             visible={isVisible}
             onOk={() => {
                // console.log(defaultValue)
                console.log(form.getFieldsValue())
             }}
             cancelButtonProps={{ style: { display: 'none' } }}
             okButtonProps={{style:{
                background:'#398537',
                border:'none',
                width:'150px',
                height:'50px',
                display:'none',
                borderRadius:'6px'
             }}}
             okText='Simpan'
             onCancel={handleCancel}
             maskClosable={false}
             width={890}
             height={731}
        >
              <Form form={form}>
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
                            rules={[{ required: true, message: 'Please fill name' }]}
                        >    
                            <Input 
                                name={'name'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'username'}
                                rules={[{ required: true, message: 'Please fill username' }]}
                            >  
                                <Input 
                                    className='inputData'
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
                            rules={[{ required: true, message: 'Please fill email' }]}
                        >
                            <Input 
                                className='inputData'
                                name={'email'}
                                type='email'
                            >
                            </Input>
                        </Form.Item>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                    <Form.Item
                            name={'mobilePhone'}
                            rules={[{ required: true, message: 'Please fill mobile phone' }]}
                        >
                            <Input 
                                className='inputData'
                                name={'mobilePhone'}
                            >
                            </Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Sex</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Division</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>
                        <WrapperSelectWithHeight>
                        <Form.Item
                            name={'sex'}
                        >
                            <Select 
                                style={{width:'400px'}} 
                                className='dropdownData'
                                name={'sex'}
                            >
                                <Option key={'Wanita'}>Wanita</Option>
                                <Option key={'Pria'}>Pria</Option>
                            </Select>
                        </Form.Item>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                            name={'division'}
                            rules={[{ required: true, message: 'Please fill division' }]}
                        >
                            <Input 
                                className='inputData'
                                name={'division'}
                            >
                            </Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Team</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Class</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>
                    <Form.Item
                            name={'team'}
                            rules={[{ required: true, message: 'Please fill team' }]}
                        >
                            <Input 
                                className='inputData'
                                name={'team'}
                            >
                            </Input>
                        </Form.Item>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                            name={'class'}
                            rules={[{ required: true, message: 'Please fill class' }]}
                            noStyle
                        >
                            <Input 
                                className='inputData'
                                name={'class'}
                            >
                            </Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Level Admin</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Is Active</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}> 
                        <WrapperSelectWithHeight>
                            <Form.Item
                                name={'levelAdmin'}
                            >
                                <Select 
                                    style={{width:'400px'}} 
                                    className='dropdownData'
                                    name={'levelAdmin'}
                                >
                                    <Option key={'Staff'}>Staff</Option>
                                    <Option key={'Manager'}>Manager</Option>
                                </Select>
                            </Form.Item>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <WrapperSelectWithHeight>
                        <Form.Item
                                name={'isActive'}
                            >
                                <Select 
                                    style={{width:'400px'}} 
                                    className='dropdownData'
                                    name={'isActive'}
                                >
                                    <Option key={'Yes'}>Yes</Option>
                                    <Option key={'No'}>No</Option>
                                </Select>
                            </Form.Item>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
              </Form>

            
        </Modal>

    )

  }

export default CustomModalEditPengguna;