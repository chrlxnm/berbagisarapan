import { Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'

import Autocomplete from '../../../../components/AutoComplete/AutoComplete';
import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import { OPTION_WA } from '../../../../helpers/constants';
import styled from 'styled-components';

function FilterModal({visible,handleCancel,handleOk, title}) {
    const [form] = Form.useForm();
    const [filteredSuggestions, setFilteredSuggestions] = useState(OPTION_WA());

   const onSearch = (searchText) => {
    const result = !searchText ? [] : filteredSuggestions?.filter(
      suggestion =>
        suggestion?.value.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    setFilteredSuggestions(result)
  };

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
        onFinish={(data)=>{
            handleOk(data)
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
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Autocomplete
                            placeholder='No WA'
                            name='noWA'
                            options={OPTION_WA()}
                        />
                    </Col>
                    
                    <Col className='rightSide' span={12}>
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
                            <h3 className='labelField'>Agama</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Kota</h3>
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
                                name={'kota'}
                            >  
                                <Input 
                                    placeholder='Kota'
                                    name={'kota'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Program Favorit</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Kategori</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'programFavorit'}
                        >    
                            <Input 
                                placeholder='Program Favorit'
                                name={'programFavorit'}
                            />
                        </Form.Item>
                   
                    </Col>
                    
                    <Col className='rightSide' span={12}>
                        <Form.Item
                                name={'kategori'}
                            >  
                                <Input 
                                    placeholder='Kategori'
                                    name={'kategori'}
                                />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Admin</h3>
                    </Col>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Date Added</h3>
                    </Col>
                </Row>
                <Row className='row2' span={24}>
                    <Col className='leftSide' span={12}>  
                        <Form.Item
                            name={'admin'}
                        >    
                            <Input
                                placeholder='Admin'
                                name={'admin'}
                            />
                        </Form.Item>
                   
                    </Col>
                    <Col className='rightSide' span={12}>  
                    <DateWrapper>
                        <Form.Item
                            style={{width: '45%'}}
                            name={'tanggalMulai'}
                        >    
                            <DatePicker 
                                format={'DD-MM-YYYY'}
                                placeholder='Tanggal Mulai'
                                name={'tanggalMulai'}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            style={{width: '45%'}}
                            name={'tanggalBerakhir'}
                        >    
                            <DatePicker 
                                format={'DD-MM-YYYY'}
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