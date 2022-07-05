import React from 'react'
import { Row } from 'antd'

function HeaderTitle({title, subTitle}) {
  return (
    <>
        <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>{title}</h1></Row>
        <Row><h1 style={{fontSize:'14px', color:'#828282'}}>{subTitle}</h1></Row>
    </>
  )
}

export default HeaderTitle