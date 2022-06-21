// import '.index.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import EmptyPage from '../EmptyPage';
import FooterComponent from '../../components/Footer/footerComponent';
import Header from '../../components/Header';
import HomePage from '../HomePage';
import { Layout } from 'antd';
import LoginPage from '../LoginPage';
import React from 'react';
import useToken from '../../helpers/utils';

const { Content } = Layout;

const AppPage = () => {
    const { token, setToken } = useToken();

    if (token){
        return (
            <LoginPage setToken={setToken} />
        )
    };

    return(
    <>
        <Header/>
            <Layout className={'content-homepage'}>
                <Content className="content-page">
                <BrowserRouter>
                    <nav>
                    <ul>
                        <li><Link to="/page1">Page 1</Link></li>
                        <li><Link to="/page2">Page 2</Link></li>
                    </ul>
                    </nav>
                    <Switch>
                        <Route path='/page1'>
                            <EmptyPage/>
                        </Route>
                        <Route path='/home'>
                            <HomePage/>
                        </Route>
                        <Route path='*'>
                            <HomePage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
                </Content>
            </Layout>
        <FooterComponent/>
    </>
    )
}

export default AppPage