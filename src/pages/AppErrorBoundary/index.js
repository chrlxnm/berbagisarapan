import React from 'react';
import PropTypes from 'prop-types';
import AppSiteLayoutWrapper from '../../components/AppSiteLayoutWrapper/AppSiteLayoutWrapper';
import { AppStdParagraph } from '../../components/AppSiteLayoutWrapper/style';
import { ErrorBoundaryContentWrapper } from './style';

class AppErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log('error: ', error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log('errorInfo: ', errorInfo);
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <AppSiteLayoutWrapper>
                    <ErrorBoundaryContentWrapper>
                        <AppStdParagraph>Mohon Maaf, terjadi sebuah kesalahan.</AppStdParagraph>
                        <AppStdParagraph>Silahkan Refresh halaman dan hubungi Customer Services.</AppStdParagraph>
                    </ErrorBoundaryContentWrapper>
                </AppSiteLayoutWrapper>
            );
        } else {
            return this.props.children;
        }
    }
}

AppErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppErrorBoundary;
