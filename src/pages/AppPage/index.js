import './style.css';

import { Layout, Menu } from 'antd';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import EmptyPage from '../EmptyPage';
import { Header } from 'antd/lib/layout/layout';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import Navbar from '../../components/Navbar/SideNavbar';
import logoCB from "../../assets/images/cb-logo.svg";
import styled from 'styled-components';
import useToken from '../../helpers/utils';

const { Content, Sider } = Layout;

const AppPage = () => {
    const { token, setToken } = useToken();
    const [collapsed, setCollapsed] = useState(false);
    console.log('re', token)
    if (!token){
        return (
            <LoginPage setToken={setToken} />
        )
    };

    return(
    <>
        <Router>
            {/* <Navbar setToken={setToken} /> */}
            <Switch>
                <Layout className='app-page'>
                    <Sider trigger={null}>
                        <Logo src={logoCB} alt='' className='img-core' onClick = {()=>{
                            }}
                            />
                        <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Beranda',
                            },
                            {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Menu Utama',
                            children:[{
                                key: 'sub21',
                                label: 'Daftar Pengguna'
                                },
                                {
                                key: 'sub22',
                                label: 'Daftar Donatur'
                                }]
                            },
                            {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Menu Transaksi',
                            },
                        ]}
                        />
                        <SettingWrapper>
                            <NameText>Gilang Ilham</NameText>
                            <EmailText>gilangilham@gmail.com</EmailText>
                            <ButtonWrapper>
                                <ButtonSider>
                                <SettingOutlined style={{color: 'black'}}/>
                                </ButtonSider>
                                <ButtonSider>
                                <LogoutOutlined style={{color: '#BB0001'}}/>
                                </ButtonSider>
                            </ButtonWrapper>
                        </SettingWrapper>
                    </Sider>
                    <Layout className="site-layout">
                        <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                        >
                            <Route path="/home" component={HomePage} />
                            <Route path="/reports" component={EmptyPage} />
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                        </Content>
                    </Layout>
                </Layout>
            </Switch>
        </Router>
    </>
    )
}

export default AppPage

const Logo =styled.img`
width: 31px;
height: 75px;
margin-top: 2rem;
margin-bottom: 1rem;
`

const SettingWrapper = styled.div`
position: absolute;
bottom: 6rem;
text-align: center;
width: 100%;
`

const NameText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 60%;
/* identical to box height, or 26px */

text-align: center;

/* Hitam */

color: #2C2C2C;
`

const EmailText = styled.p`
// font-family: 'Poppins';
font-style: normal;
font-weight: 100;
font-size: 14px;
line-height: 60%;
/* or 22px */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

/* Gray 2 */

color: #4F4F4F;
`
const ButtonWrapper = styled.div`
gap: 1rem;
justify-content: center;
display: flex;
`
const ButtonSider = styled.div`
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
cursor: pointer;
`