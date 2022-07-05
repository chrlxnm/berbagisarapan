import './style.css'

import { Modal as ModalAntd } from 'antd';
import React from 'react'

const Modal = ({title, isModalVisible, handleOk, handleCancel, children}) => {
    return (
        <>
          <ModalAntd 
          className='custom-modal-bs' 
          title={title} 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}>
            {children}
          </ModalAntd>
        </>
      );
}

export default Modal