import {message } from 'antd';


const errorAlert = (pesan) => {
    return (
        message.error(pesan,5)
    )
  };

export default errorAlert