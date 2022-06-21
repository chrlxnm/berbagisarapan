import { AppContentWrapper, AppFooter, AppFooterWrapper } from '../AppContentWrapper/style';

import { AppHeaderWrapper } from './style';
import { Layout } from 'antd';

const AppSiteLayoutWrapper = ({ children }) => {
    return (
        <Layout>
            <AppHeaderWrapper>
                <img src={'CoreLogo'} alt='logo' style={{ width: '12rem' }} />
            </AppHeaderWrapper>
            <AppContentWrapper>
                {children}
            </AppContentWrapper>
            <AppFooterWrapper>
                <AppFooter>
                    © 2021 PT Bank Mandiri Persero TBK
                </AppFooter>
            </AppFooterWrapper>
        </Layout>
    )
}

export default AppSiteLayoutWrapper;
