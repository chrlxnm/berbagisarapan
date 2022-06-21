import { AppContentWrapper, AppFooter, AppFooterWrapper, AppLayout } from "./style";

const AppLayoutWrapper = ({children}) =>(
    <AppLayout>
        <AppContentWrapper>
            {children}
        </AppContentWrapper>
        <AppFooterWrapper>
            <AppFooter>
                © 2021 PT Bank Mandiri Persero TBK
            </AppFooter>
        </AppFooterWrapper>
    </AppLayout>
)

export default AppLayoutWrapper;
