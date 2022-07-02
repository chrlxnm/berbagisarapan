import React from 'react'

const Modal = (title, isModalVisible, handleOk, handleCancel) => {
    return (
        <>
          <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </>
      );
}

export default Modal