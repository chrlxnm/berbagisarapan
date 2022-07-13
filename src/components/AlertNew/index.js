import React, { Fragment, useEffect, useState } from 'react';

import {ALERT_TYPE} from "./types";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const getBorderColor = ({type}) => {
    switch (type) {
        case ALERT_TYPE.SUCCESS:
            return '#77E4BD';
        case ALERT_TYPE.ERROR:
            return '#FFA39E';
        default:
            return '#77E4BD';
    }
}

const getBackgroundColor = ({type}) => {
    switch (type) {
        case ALERT_TYPE.SUCCESS:
            return '#F1FFFA';
        case ALERT_TYPE.ERROR:
            return '#FFF1F0';
        default:
            return '#F1FFFA';
    }
}

const AlertWrapper = styled.div`
  position: absolute;
  width: 560px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  
  background: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
  
  border-radius: 6px;
  top: 50px;
  left: calc(50% - 255px);
`

const AlertContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AlertMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ButtonClose = styled.button`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: none;
  cursor: pointer;
`;

const SuccessIcon = () => {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45694 0C3.51405 0 0.317871 3.13392 0.317871 7C0.317871
            10.8661 3.51405 14 7.45694 14C11.3998 14 14.596 10.8661 14.596 7C14.596 3.13392 11.3998 0 7.45694 0ZM11.7725
            5.14428L5.9747 10.6772C5.80023 10.8483 5.5169 10.8483 5.34244 10.6772L3.12744 8.60117C2.95298 8.43011 2.95298 8.1523
            3.12744 7.98123C3.30191 7.81017 3.58524 7.81017 3.7597 7.98123L5.65927 9.748L11.1402 4.52434C11.3147 4.35328 11.598
            4.35328 11.7725 4.52434C11.947 4.69541 11.947 4.97322 11.7725 5.14428Z" fill="#31C18D"/>
        </svg>
    )
}

const ErrorIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14C10.8664
            14 14 10.8664 14 7C14 3.13359 10.8664 0 7 0ZM10.2949 9.61543C10.4672 9.78496 10.4699 10.0611 10.3018 10.2348C10.1322
            10.407 9.85606 10.4098 9.68243 10.2416L7.00001 7.6125L4.31759 10.2402C4.14532 10.4098 3.86778 10.407 3.69825 10.2334C3.52872
            10.0611 3.53145 9.78359 3.70509 9.61406L6.3752 7L3.70509 4.38457C3.53282 4.21504 3.53009 3.93887 3.69825 3.76523C3.86778 3.59297
            4.14395 3.59023 4.31759 3.7584L7.00001 6.3875L9.68243 3.75977C9.8547 3.59023 10.1322 3.59297 10.3018 3.7666C10.4713 3.93887 10.4686
            4.21641 10.2949 4.38594L7.62481 7L10.2949 9.61543Z" fill="#E2283E"/>
        </svg>
    )
}

const CloseIcon = () => {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5451 1.95992C11.7729 1.73211 12.1422 1.73211 12.37 1.95992C12.5978 2.18772 12.5978 2.55707 12.37
            2.78487L3.06349 12.0914C2.83568 12.3192 2.46633 12.3192 2.23853 12.0914C2.01072 11.8636 2.01072 11.4943 2.23853
            11.2665L11.5451 1.95992Z" fill="#8597AC"/>
            <path d="M3.01193 1.95992C2.78412 1.73211 2.41477 1.73211 2.18697 1.95992C1.95916 2.18772 1.95916 2.55707 2.18697
            2.78487L11.4935 12.0914C11.7213 12.3192 12.0907 12.3192 12.3185 12.0914C12.5463 11.8636 12.5463 11.4943 12.3185
            11.2665L3.01193 1.95992Z" fill="#8597AC"/>
        </svg>
    )
}


const AlertCore = ({message, type, onClose}) => {
    const IconShow = () => {
        switch (type) {
            case ALERT_TYPE.SUCCESS:
                return <SuccessIcon />
            case ALERT_TYPE.ERROR:
                return <ErrorIcon />
            default:
                return <SuccessIcon />
        }
    }

    useEffect(()=> {
    setTimeout(() => {
        onClose()
    }, 3000)
    }
    ,[])

    return ReactDOM.createPortal(
        <Fragment>
            <AlertWrapper type={type}>
                <AlertContentWrapper>
                    <AlertMessageWrapper>
                        <IconShow type={type}/>
                        <h3 style={{marginBottom: 'unset'}}>
                            {message}
                        </h3>
                    </AlertMessageWrapper>
                    <ButtonClose onClick={onClose}>
                        <CloseIcon />
                    </ButtonClose>
                </AlertContentWrapper>
            </AlertWrapper>
        </Fragment>,
        document.getElementById('root')
    )
}



const AlertNew = ({visible, message, type, onClose}) => {
    return visible ? <AlertCore message={message} type={type} onClose={onClose} /> : null
};

export default AlertNew;