import {message } from 'antd';


const successAlert = (pesan) => {
    return (
        message.success(pesan,5)
    )
  };

export default successAlert