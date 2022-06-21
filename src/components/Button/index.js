import './index'

import { Button as ButtonAntd } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'

export const Button = ({
    children,
    type,
    onClick,
    btnStyle,
    btnSize
}) => {
    <ButtonAntd 
    className={`btn ${btnStyle} ${btnSize}`}
    onClick={onClick}>
        {children}
    </ ButtonAntd>
}