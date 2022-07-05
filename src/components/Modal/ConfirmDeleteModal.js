import { ButtonPrimary, ButtonSecondary } from '../Button/Button';
import { Modal, Row as RowAntd, Space } from 'antd'

import React from 'react'
import styled from 'styled-components';

function ConfirmDeleteModal({visible, handleCancel, handleOk}) {
  return (
    <Modal 
    className='delete-modal' 
    visible={visible}
    handleOk={handleOk}
    title={'Menghapus Item'}
    onCancel={()=>{
        handleCancel()}}>
            <Row>
                <p>Apakah anda yakin menghapus item ini?</p>
            </Row>
            <Row>
                <Space>
                    <ButtonSecondary onClick={handleCancel}> Batal </ButtonSecondary>
                    <ButtonPrimary onClick={handleOk}> OK </ButtonPrimary>
                </Space>
            </Row>
    </Modal>
  )
}

export default ConfirmDeleteModal

const Row = styled(RowAntd)`
display: flex;
justify-content: center;
`