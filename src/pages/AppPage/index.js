import './style.css';

import { ButtonSider, ButtonWrapper, EmailText, Logo, NameText, SettingWrapper } from './styles';
import { FileTextOutlined, HomeOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState,useHistory } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import EmptyPage from '../EmptyPage';
import HomePage from '../HomePage';
import DaftarPengguna from '../MenuTransaksi/DaftarPengguna';
import LoginPage from '../LoginPage';
import logoCB from "../../assets/images/cb-logo.svg";
import useToken from '../../helpers/utils';
import DaftarDonatur from '../MenuTransaksi/DaftarDonatur';

const { Content, Sider } = Layout;

const AppPage = () => {
    const { token, setToken } = useToken();
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setCollapsed(true)
        }
    }
    // const router = useHistory()
    useEffect(()=> {
        window.addEventListener("resize", handleResize)
    },[]);

    const [collapsed, setCollapsed] = useState(false);
    const [current,setCurrent] = useState('1');


    const onClick = (e) => {
            setCurrent(e.key)
    }

    const route = (e) => {
        console.log(e)
        switch(e){
            case '1':
             return  <HomePage></HomePage>
            case 'sub21':
                return  <DaftarPengguna></DaftarPengguna>
            case 'sub22':
                return  <DaftarDonatur></DaftarDonatur>
            default:
                return  <EmptyPage></EmptyPage>
        }
    }

    console.log('re', token)
    if (!token){
        return (
            <LoginPage setToken={setToken} />
        )
    };
    return(
    <>
        <Router>
            <Switch>
                <Layout className='app-page'>
                    <Sider className={`main-side-bar ${!collapsed?'uncollapse-side-bar':''}`} trigger={null} collapsible collapsed={collapsed} style={{
                        height: '100vh',
                        overflow: 'auto',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        }}>
                        <Logo src={logoCB} alt='Logo' className='img-core' onClick = {()=>{
                            setCollapsed(!collapsed)
                            }}
                            />
                        <Menu
                        theme="dark"
                        popupClassName="submenu-pop-up"
                        mode="inline"
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Beranda',
                            },
                            {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Menu Utama',
                            children:[{
                                key: 'sub21',
                                label: 'Daftar Pengguna',
                                },
                                {
                                key: 'sub22',
                                label: 'Daftar Donatur'
                                }]
                            },
                            {
                            key: '3',
                            icon: <FileTextOutlined />,
                            label: 'Menu Transaksi',
                            children:[{
                                key: 'sub31',
                                label: 'Donasi Harian'
                                },
                                {
                                key: 'sub32',
                                label: 'Laporan Harian'
                                }]
                            },
                        ]}
                        />
                        <SettingWrapper>
                            {!collapsed ? 
                            <><NameText>Gilang Ilham</NameText>
                            <EmailText>gilangilham@gmail.com</EmailText></>
                            :<></>}
                            <ButtonWrapper className={collapsed? 'btn-collapsed':''}>
                                <ButtonSider>
                                <SettingOutlined style={{color: 'black'}}/>
                                </ButtonSider>
                                <ButtonSider onClick={()=>setToken(null)}>
                                <LogoutOutlined style={{color: '#BB0001'}}/>
                                </ButtonSider>
                            </ButtonWrapper>
                        </SettingWrapper>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: collapsed? '80px' : '228px', }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            overflow: "initial"
                        }}>
                            {route(current)}
                            {/* <Route path="/home" component={HomePage} />
                            <Route path="/reports" component={EmptyPage} />
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route> */}
                        </Content>
                    </Layout>
                </Layout>
            </Switch>
        </Router>
        {
            current === 1 ? <EmptyPage></EmptyPage> :''
        }
    </>
    
    )
}

export default AppPage