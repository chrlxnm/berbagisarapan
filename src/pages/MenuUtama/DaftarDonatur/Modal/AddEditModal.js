import { Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import { OPTION_ADMIN, OPTION_KATEGORI, OPTION_WA } from '../../../../helpers/constants';
import React, { useEffect, useState } from 'react'

import Autocomplete from '../../../../components/AutoComplete/AutoComplete';
import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import moment from 'moment';
import styled from 'styled-components';
import { requiredMark } from '../../../../components/customRequiredMark';

const { Option } = SelectAntd;

function AddModal({visible,handleCancel,handleOk, title, data}) {
    const [form] = Form.useForm();
    const onSelectWA = (record) => {
        form.setFieldsValue({
            berapaKali: record?.berapaKali,
            totalDonasi: record?.totalDonasi,
            programFavorit: record?.programFavorit,
            lastUpdate: moment(record?.lastUpdate, 'DD-MM-YYYY'),

        })
    }

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
            dateAdded: moment(data?.dateAdded, 'DD-MM-YYYY'),
            programFavorit: data?.programFavorit,
            kategori: data?.kategori,
            hasilSurvey: data?.hasilSurvey,
            keterangan: data?.keterangan,
            admin: data?.admin,
            lastUpdate: moment(data?.lastUpdate, 'DD-MM-YYYY'),
        })}
    },[data])

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
                dateAdded:e?.dateAdded?.format('DD-MM-YYYY'),
                lastUpdate:e?.lastUpdate?.format('DD-MM-YYYY'),
            }
            handleOk(data)
        }}
        onFinishFailed={(e)=>{
            console.log(e)
        }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Panggilan</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Nama{requiredMark}</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'panggilan'}
                        >    
                            <Input
                                placeholder='Panggilan'
                                name={'panggilan'}
                            />
                        </Form.Item>
                   
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
                            <h3 className='labelField'>No WA{requiredMark}</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Email</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Autocomplete
                            placeholder='No WA'
                            name='noWA'
                            options={OPTION_WA()}
                            onSelect={(_, record) => onSelectWA(record) }
                        />
                    </Col>
                    
                    <Col className='rightSide' span={12}>
                        <Form.Item
                                name={'email'}
                            >  
                                <Input
                                    placeholder='Email' 
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'agama'}
                        >    
                            <Input
                                placeholder='Agama'
                                name={'agama'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'hobi'}
                        >    
                            <Input
                                placeholder='Hobi' 
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'kota'}
                        >    
                            <Input
                                placeholder='Kota'
                                name={'kota'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'alamat'}
                        >    
                            <Input
                                placeholder='Alamat' 
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'berapaKali'}
                        >    
                            <Input
                                placeholder='Berapa Kali' 
                                disabled={data}
                                name={'berapaKali'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'totalDonasi'}
                        >    
                            <Input
                                placeholder='Total Donasi'
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'dateAdded'}
                        >    
                            <DatePicker 
                                format={'DD-MM-YYYY'}
                                placeholder='Date Added'
                                name={'dateAdded'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'programFavorit'}
                        >    
                            <Input
                                placeholder='Program Favorit'
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'kategori'}
                        >    
                            <Select
                                placeholder='Kategori' 
                                options={OPTION_KATEGORI}
                                name={'kategori'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'hasilSurvey'}
                        >    
                            <Input
                                placeholder='HasilSurvey'
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
                            <h3 className='labelField'>Admin{requiredMark}</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'keterangan'}
                        >    
                            <Input
                                placeholder='Keterangan'
                                name={'keterangan'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                        <Form.Item
                            name={'admin'}
                            rules={[{ required: true, message: 'Please fill admin' }]}
                        >    
                            <Select
                                placeholder='Admin'
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'lastUpdate'}
                        >    
                            <DatePicker 
                                format={'DD-MM-YYYY'}
                                placeholder='Last Update'
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

const DatePicker = styled(DatePickerAntd)`
height: 40px !important;
width: 100%;
border-radius: 6px !important;
`