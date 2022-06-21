import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

export const AppHeaderWrapper = styled(Header)`
    margin: 0px; 
    background-color: #fff;
    height: 120px; 
    display: flex; 
    justify-content: center; 
    align-items: center;
`

export const AppStdParagraph = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #444F5C;
`