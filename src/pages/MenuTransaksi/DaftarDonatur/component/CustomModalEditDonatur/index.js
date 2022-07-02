import React, { useEffect, useState } from 'react';
import { Divider, Modal, Radio, Select, Form, InputNumber,Input,Row,Col, Space } from 'antd';
import './styles.css';
import { Label } from '../../../../../components';
import '../../styled.js'
import { WrapperSelectWithHeight } from "../../styled.js";

const CustomModalEditDonatur = ({
    title,
    isVisible,
    handleCancel,
    content,
}) => {

    console.log(title,isVisible,handleCancel,content)
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
    console.log('test'),
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
                            <h3 className='labelField'>Panggilan</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Nama</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'panggilan'}
                            rules={[{ required: true, message: 'Please fill panggilan' }]}
                        >    
                            <Input 
                                name={'panggilan'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'name'}
                                rules={[{ required: true, message: 'Please fill nama' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'name'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>No Wa</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Email</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'whatsapp'}
                            rules={[{ required: true, message: 'Please fill whatsapp' }]}
                        >    
                            <Input 
                                name={'whatsapp'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'email'}
                                rules={[{ required: true, message: 'Please fill email' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'email'}
                                />
                        </Form.Item>
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
                        <Form.Item
                            name={'agama'}
                            rules={[{ required: true, message: 'Please fill agama' }]}
                        >    
                            <Input 
                                name={'agama'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'hobi'}
                                rules={[{ required: true, message: 'Please fill hobi' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'hobi'}
                                />
                        </Form.Item>
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
                        <Form.Item
                            name={'kota'}
                            rules={[{ required: true, message: 'Please fill kota' }]}
                        >    
                            <Input 
                                name={'kota'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'alamat'}
                                rules={[{ required: true, message: 'Please fill alamat' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'alamat'}
                                />
                        </Form.Item>
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
                        <Form.Item
                            name={'berapakali'}
                            rules={[{ required: true, message: 'Please fill berapakali' }]}
                        >    
                            <Input 
                                name={'berapakali'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'totalDonasi'}
                                rules={[{ required: true, message: 'Please fill totalDonasi' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'totalDonasi'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Date Addedd</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Program Favorit</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'dataAdded'}
                            rules={[{ required: true, message: 'Please fill Date Added' }]}
                        >    
                            <Input 
                                name={'dataAdded'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'programFavorit'}
                                rules={[{ required: true, message: 'Please fill Program Favorit' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'programFavorit'}
                                />
                        </Form.Item>
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
                            <Form.Item
                                name={'kategori'}
                            >
                                <Select 
                                    style={{width:'400px'}} 
                                    className='dropdownData'
                                    name={'kategori'}
                                >
                                    <Option key={"Lorem"}>Lorem</Option>
                                    <Option key={'Ipsum'}>Ipsum</Option>
                                </Select>
                            </Form.Item>
                        </WrapperSelectWithHeight>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'totalDonasi'}
                                rules={[{ required: true, message: 'Please fill totalDonasi' }]}
                            >  
                                <Input 
                                    className='inputData'
                                    name={'totalDonasi'}
                                />
                        </Form.Item>
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
                        <Form.Item
                            name={'keterangan'}
                            rules={[{ required: true, message: 'Please fill Date Keterangan' }]}
                        >    
                            <Input 
                                name={'keterangan'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                            <WrapperSelectWithHeight>
                                <Form.Item
                                    name={'admin'}
                                >
                                    <Select 
                                        style={{width:'400px'}} 
                                        className='dropdownData'
                                        name={'admin'}
                                    >
                                        <Option key={"Yes"}>Yes</Option>
                                        <Option key={'No'}>No</Option>
                                    </Select>
                                </Form.Item>
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
                        <Form.Item
                            name={'lastUpdate'}
                            rules={[{ required: true, message: 'Please fill Date Added' }]}
                        >    
                            <Input 
                                name={'lastUpdate'}
                                className='inputData'
                            />
                        </Form.Item>
                   
                    </Col>
                </Row>
            </Form>
    </Modal>
 
   )
}

export default CustomModalEditDonatur;