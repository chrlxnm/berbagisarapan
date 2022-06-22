// import '.index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import EmptyPage from '../EmptyPage';
import FooterComponent from '../../components/Footer/footerComponent';
import HomePage from '../HomePage';
import { Layout } from 'antd';
import LoginPage from '../LoginPage';
import Navbar from '../../components/Navbar/SideNavbar';
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
        <Router>
            <Navbar/>
                <Switch>
                    <Layout className={'content-homepage'}>
                        <Content className="content-page">
                            <Route path="/home" component={HomePage} />
                            <Route path="/reports" component={EmptyPage} />
                            {/* <Route component={HomePage} /> */}
                        </Content>
                    </Layout>
                </Switch>
        </Router>
        <FooterComponent/>
    </>
    )
}

export default AppPage