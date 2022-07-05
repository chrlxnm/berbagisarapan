import { Col, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import { OPTION_ADMIN, OPTION_KATEGORI } from '../../../../helpers/constants';
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
            panggilan: data?.panggilan,
            nama: data?.nama,
            noWA: data?.noWA,
            email: data?.email,
            agama: data?.agama,
            hobi: data?.hobi,
            kota: data?.kota,
            alamat: data?.alamat,
            berapaKali: data?.berapaKali,
            totalDonasi: data?.totalDonasi,
            dateAdded: data?.dateAdded,
            programFavorit: data?.programFavorit,
            kategori: data?.kategori,
            hasilSurvey: data?.hasilSurvey,
            keterangan: data?.keterangan,
            admin: data?.admin,
            lastUpdate: data?.lastUpdate,
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
                            rules={[{ required: true, message: 'Please fill agama' }]}
                        >    
                            <Input 
                                name={'panggilan'}
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
                            <h3 className='labelField'>No WA</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Email</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'noWA'}
                            rules={[{ required: true, message: 'Please fill kota' }]}
                        >    
                            <Input 
                                disabled={data}
                                name={'noWA'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' xl={12}>
                        <Form.Item
                                name={'email'}
                                rules={[{ required: true, message: 'Please fill alamat' }]}
                            >  
                                <Input 
                                    name={'email'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Agama</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
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
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'hobi'}
                            rules={[{ required: true, message: 'Please fill hobi' }]}
                        >    
                            <Input 
                                name={'hobi'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Kota</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
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
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'alamat'}
                            rules={[{ required: true, message: 'Please fill alamat' }]}
                        >    
                            <Input 
                                name={'alamat'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Berapa Kali</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Total Donasi</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'berapaKali'}
                            rules={[{ required: true, message: 'Please fill berapa kali' }]}
                        >    
                            <Input 
                                disabled={data}
                                name={'berapaKali'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'totalDonasi'}
                            rules={[{ required: true, message: 'Please fill total donasi' }]}
                        >    
                            <Input
                                disabled={data}
                                name={'totalDonasi'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Date Added</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Program Favorit</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'dateAdded'}
                            rules={[{ required: true, message: 'Please fill date added' }]}
                        >    
                            <Input
                                name={'dateAdded'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'programFavorit'}
                            rules={[{ required: true, message: 'Please fill program favorit' }]}
                        >    
                            <Input
                                disabled={data}
                                name={'programFavorit'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Kategori</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Hasil Survey</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'kategori'}
                            rules={[{ required: true, message: 'Please fill kategori' }]}
                        >    
                            <Select 
                                options={OPTION_KATEGORI}
                                name={'kategori'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'hasilSurvey'}
                            rules={[{ required: true, message: 'Please fill hasil survey' }]}
                        >    
                            <Input
                                name={'hasilSurvey'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Keterangan</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Admin</h3>
                    </Col>
                </Row>
                <Row className='row2' xl={24}>
                    <Col className='leftSide' xl={12}>  
                        <Form.Item
                            name={'keterangan'}
                            rules={[{ required: true, message: 'Please fill keterangan' }]}
                        >    
                            <Input
                                name={'keterangan'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' xl={12}>  
                        <Form.Item
                            name={'admin'}
                            rules={[{ required: true, message: 'Please fill admin' }]}
                        >    
                            <Select 
                                options={OPTION_ADMIN}
                                name={'admin'}
                            />
                        </Form.Item>
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
                            rules={[{ required: true, message: 'Please fill last update' }]}
                        >    
                            <Input
                            disabled={data}
                                name={'lastUpdate'}
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