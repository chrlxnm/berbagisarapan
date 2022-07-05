import './style.css';

import { ButtonSider, ButtonWrapper, EmailText, Logo, NameText, SettingWrapper } from './styles';
import { FileTextOutlined, HomeOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect, useHistory, useState } from 'react';

import Akun from '../Akun';
import Beranda from '../Beranda';
import DaftarDonatur from '../MenuUtama/DaftarDonatur';
import DaftarPengguna from '../MenuUtama/DaftarPengguna';
import DonasiHarian from '../MenuTransaksi/DonasiHarian';
import LaporanHarian from '../MenuTransaksi/LaporanHarian';
import LoginPage from '../LoginPage';
import logoCB from "../../assets/images/cb-logo.svg";
import useToken from '../../helpers/utils';

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
                        mode="inline"
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: <Link to="beranda">Beranda</Link>,
                            },
                            {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Menu Utama',
                            children:[{
                                key: 'sub21',
                                label: <Link to="daftar-pengguna">Daftar Pengguna</Link>
                                },
                                {
                                key: 'sub22',
                                label: <Link to="daftar-donatur">Daftar Donatur</Link>
                                }]
                            },
                            {
                            key: '3',
                            icon: <FileTextOutlined />,
                            label: 'Menu Transaksi',
                            children:[{
                                key: 'sub31',
                                label: <Link to="donasi-harian">Donasi Harian</Link>
                                },
                                {
                                key: 'sub32',
                                label: <Link to="laporan-harian">Laporan Harian</Link>
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
                            <Link to="akun">
                                <ButtonSider>
                                <SettingOutlined style={{color: 'black'}}/>
                                </ButtonSider>
                                </Link>
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
                            <Route path="/beranda" component={Beranda} />
                            <Route path="/daftar-pengguna">
                                <DaftarPengguna />
                            </ Route>
                            <Route path="/daftar-donatur">
                                <DaftarDonatur />
                            </ Route>
                            <Route path="/donasi-harian">
                                <DonasiHarian />
                            </ Route>
                            <Route path="/laporan-harian">
                                <LaporanHarian />
                            </ Route>
                            <Route path="/akun">
                                <Akun />
                            </ Route>
                        </Content>
                    </Layout>
                </Layout>
            </Switch>
        </Router>
    </>
    
    )
}

export default AppPage