import { AppContentWrapper, AppFooter, AppFooterWrapper } from '../AppContentWrapper/style';

import { AppHeaderWrapper } from './style';
import { Layout } from 'antd';
import logoCB from "../../assets/images/cb-logo.svg";

const AppSiteLayoutWrapper = ({ children }) => {
    return (
        <Layout>
            <AppHeaderWrapper>
                <img src={logoCB} alt='logo' style={{ width: '3rem' }} />
            </AppHeaderWrapper>
            <AppContentWrapper>
                {children}
            </AppContentWrapper>
        </Layout>
    )
}

export default AppSiteLayoutWrapper;
