import { Col, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'

import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
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
        <Form>
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
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option key={2}>Wanita</Option>
                            </Select>
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
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option>Staff</Option>
                            </Select>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Select style={{width:'400px'}} className='dropdownData'>
                                <Option key={2}>No</Option>
                            </Select>
                    </Col>
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