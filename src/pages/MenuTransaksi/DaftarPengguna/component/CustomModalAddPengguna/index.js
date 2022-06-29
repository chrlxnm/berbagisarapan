import React, { useState } from 'react';
import { Divider, Modal, Radio, Select, Form, InputNumber,Input,Row,Col, Space } from 'antd';
import './styles.css';
import { Label } from '../../../../../components';
import '../../styled.js'
import { WrapperSelectWithHeight } from "../../styled.js";

const CustomModalAddPengguna = ({
    title,
    isVisible,
    handleCancel

}) => {
    const [form] = Form.useForm();
    const {Option} = Select
    const style = { background: '#0092ff', padding: '8px 0' };
    return (
        <Modal
            className='modal-pengguna'
            title={<h3 style={{fontWeight:'bold'}}>Add Data</h3>}
             visible={isVisible}
             onOk={() => {
                console.log(form.getFieldsValue())
             }}
             cancelButtonProps={{ style: { display: 'none' } }}
             okButtonProps={{style:{
                background:'#398537',
                border:'none',
                width:'150px',
                height:'50px',
                borderRadius:'6px'
             }}}
             okText='Simpan'
             onCancel={handleCancel}
             maskClosable={false}
             width={890}
             height={731}
        >
              <Form>
                {/* <Row xl={24}>
                    <Col className='labelLeft label' xl={12} span={6}>
                        <h3>Name</h3>
                    </Col>
                    <Col className='labelRight label' xl={12} span={6}>
                        <h3>Username</h3>
                    </Col>
                </Row> */}
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
                            <Input className='inputData'></Input>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Input className='inputData'></Input>
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
                        
                            <Input className='inputData'></Input>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Input className='inputData'></Input>
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
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option key={2}>Wanita</Option>
                            </Select>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Input className='inputData'></Input>
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
                        
                            <Input className='inputData'></Input>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Input className='inputData'></Input>
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
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option>Staff</Option>
                            </Select>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <WrapperSelectWithHeight>
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option key={2}>No</Option>
                            </Select>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
              </Form>

            
        </Modal>

    )

  }

export default CustomModalAddPengguna;