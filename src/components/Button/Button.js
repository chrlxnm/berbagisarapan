import { Button } from "antd";
import styled from "styled-components";

export const ButtonPrimary = styled(Button)`
    background: #3E903B;
    border-radius: 8px;
    height : 44px;
    color: #FFFFFF;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    /* or 22px */

    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

        &:hover {
        background: #76b374;
        color: #FFFFFF;
    }
    &:focus {
        background: #3E903B;
        color: #FFFFFF;
        border-color: #3E903B;
    }
    &:active {
        background: #3E903B;
        color: #FFFFFF;
        border-color: #76b374;
    }
`

export const ButtonSecondary = styled(Button)`
    background: #FFFFFF;
    border-radius: 8px;
    height : 44px;
    width: 125px;
    border: solid 2px #3E903B;
    margin-right: 10px;
    color: #3E903B;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    /* or 22px */

    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

        &:hover {
        background: #f5f5f5;
        border: solid 2px #3E903B;
        color: #3E903B;
    }
    &:focus {
        background: #FFFFFF;
        color: #3E903B;
        border-color: #3E903B;
    }
    &:active {
        background: #FFFFFF;
        color: #3E903B;
        border-color: #3E903B;
    }
`