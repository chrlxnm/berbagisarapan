// import '.index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import EmptyPage from '../EmptyPage';
import FooterComponent from '../../components/Footer/footerComponent';
import Header from '../../components/Header';
import HomePage from '../HomePage';
import { Layout } from 'antd';
import LoginPage from '../LoginPage';
import Navbar from '../../components/Navbar';
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
        <Layout className={'content-homepage'}>
            <Content className="content-page">
            <Router>
                <Navbar/>
                <div>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/reports" component={EmptyPage} />
                    <Route path="*" component={HomePage} />
                </Switch>
                </div>
            </Router>
            </Content>
        </Layout>
        <FooterComponent/>
    </>
    )
}

export default AppPage