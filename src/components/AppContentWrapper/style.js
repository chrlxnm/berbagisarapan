import { Layout } from "antd";
import styled from "styled-components";

const {Content,Footer} = Layout

export const AppLayout = styled(Layout)`
    margin-top: -0.6rem;
    background-color: #F3F7FB;

`
export const AppContentWrapper = styled(Content)`
    min-height: 80vh;
    padding: 2rem;
`

export const AppFooterWrapper = styled(Footer)`
    padding: 0px;
`

export const AppFooter = styled.div`
    background-color: #0041ae;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans";
    color: #fff;
    font-size: 8pt;
`