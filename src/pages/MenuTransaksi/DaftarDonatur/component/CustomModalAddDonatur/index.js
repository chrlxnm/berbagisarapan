import React, { useState } from 'react';
import { Divider, Modal, Radio, Select, Form, InputNumber,Input,Row,Col, Space } from 'antd';
import './styles.css';
import { Label } from '../../../../../components';
import '../../styled.js'
import { WrapperSelectWithHeight } from "../../styled.js";

const CustomModalAddDonatur = ({
    title,
    isVisible,
    handleCancel,
    content,
}) => {
    console.log(title)
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
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Panggilan</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Nama</h3>
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
                            <h3 className='labelField'>No WA</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Email</h3>
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
                            <h3 className='labelField'>Agama</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Hobi</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <Input className='inputData'></Input>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Kota</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Alamat</h3>
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
                            <h3 className='labelField'>Berapa Kali</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Total Donasi</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}> 
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Data Added</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Program Favorit</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}> 
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Kategori</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Hasil Survey</h3>
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
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Keterangan</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Admin</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}> 
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
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
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Last Update</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}> 
                        <WrapperSelectWithHeight>
                            <Input className='inputData'></Input>
                        </WrapperSelectWithHeight>
                    </Col>
                </Row>
              </Form>

            
        </Modal>

    )

  }

export default CustomModalAddDonatur;