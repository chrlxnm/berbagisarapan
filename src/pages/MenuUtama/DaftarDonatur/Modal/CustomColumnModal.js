import './style.css'

import { Checkbox, Col, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import React, { useState } from 'react'

import { ButtonPrimary } from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal'
import { columns } from './columnList';
import styled from 'styled-components';

function CustomColumnModal({visible, existingColumns, handleCancel,handleOk, title}) {
    const [checked, setChecked] = useState(existingColumns);
    const columnsList = columns();

    return (
        <Modal 
        isModalVisible={visible}
        // handleOk={()=>handleOk(checked)}
        title={title}
        handleCancel={()=>{
            handleCancel()}}
        >
            <Checkbox.Group 
            defaultValue={checked}
            className='checkbox-custom' 
            style={{width: '100%'}}
            onChange={(item)=>{
                setChecked(item)
            }}
            >
            {columnsList?.map((item, index) => 
                <Row style={index!==0?{marginTop:'2rem'}:null}>
                    {item?.map((option) => 
                    <Col span={8} style={{padding: '0 1rem'}}>
                        <WrapperOption className={checked.includes(option.value)?'wrapper-checked':''}>
                        <Checkbox value={option.value}>{option.label}</Checkbox>
                        </WrapperOption>
                    </Col>
                    )}
                 </Row>
            )
            }
            </Checkbox.Group>
            
            <Row justify='center' style={{marginTop: '2rem'}}>
                    <ButtonPrimary onClick={()=>handleOk(checked)} style={{width: '25%'}}>
                        Terapkan
                    </ButtonPrimary>
            </Row>
        </Modal>
    )
}

export default CustomColumnModal


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
const WrapperOption = styled.div`
width: 100%;
border: 1px solid #E0E0E0;
border-radius: 6px;
height: 50px !important;
display: flex;
align-items: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 14px;
padding: 0 1rem;
`