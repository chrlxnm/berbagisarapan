import "./styles.css";

import React, {PureComponent} from "react";

export default class Card extends PureComponent {
    handleStyle = () => {
        const {
            isWhite,
            isWhite2,
            isWhiteCustom,
            isWhiteCustom2,
            isLightBlue,
            isBlue,
            noMargin,
            isColumn,
            isCustom,
            isCardNormal,
            isLightShadow,
            isNotFixed,
            isFullWidth,
            isFullHeight,
            isCustomWidth,
            isVAWidth,
            isVA2Width,
            isPadding2,
            isPadding3,
            isBorderRadius2,
            isTextLeft,
            isPositionRelative,
            isCustomWidth2,
            isCustomWidth3,
            isCustomWidth4,
            isCustomWidth5,
            overflowY,
        } = this.props;
        let returnedStyle = "outer-card-style";
        let returnedStyleTableOLGiro = "outer-card-style-table-online-giro";
        let returnedStyleCustom = "outer-card-custom";
        let returnedStyleCustom2 = "outer-card-custom-2";
        if (isWhite) {
            returnedStyle = returnedStyle + " outer-white";
        }
        if(isWhite2) {
            returnedStyle = returnedStyleTableOLGiro + " outer-white";
        }
        if (isWhite) {
            returnedStyle = returnedStyle + " outer-white";
        }
        if (isWhiteCustom) {
            returnedStyle = returnedStyleCustom + " outer-white";
        }
        if (isWhiteCustom2) {
            returnedStyle = returnedStyleCustom2 + " outer-white";
        }
        if (isLightBlue) {
            returnedStyle = returnedStyle + " outer-light-blue";
        }
        if (isBlue) {
            returnedStyle = returnedStyle + " outer-blue";
        }
        if (noMargin) {
            returnedStyle = returnedStyle + " outer-nomargin";
        }
        if (isColumn) {
            returnedStyle = returnedStyle + " outer-column-card";
        }
        if (isCustom) {
            returnedStyle = returnedStyle + " outer-custom-card";
        }
        

        if (isCardNormal) {
            returnedStyle = returnedStyle + " outer-card-style-normal"
        }

        if (isLightShadow) {
            returnedStyle = returnedStyle + " outer-card-style-light-shadow";
        }

        if (isNotFixed) {
            returnedStyle = returnedStyle + " card-kopra-not-fixed";
        }
        if (isCustomWidth5) {
            returnedStyle = returnedStyle + " card-width-5";
        } 

    if(isVA2Width) {
      returnedStyle = returnedStyle + " card-va2-width";
    }

    if (isCustomWidth2) {
      returnedStyle = returnedStyle + " card-width-2"
    }

    if (isCustomWidth3) {
      returnedStyle = returnedStyle + " card-width-3"
    }

    if (isCustomWidth4) {
        returnedStyle = returnedStyle + " card-width-4"
      }
    
    if(isPadding2) {
      returnedStyle = returnedStyle + " card-padding-2";
    }
    if(isPadding3) {
        returnedStyle = returnedStyle + " card-padding-3";
      }
    if(isBorderRadius2) {
      returnedStyle = returnedStyle + " card-border-radius-2";
    }
        if (isFullWidth) {
            returnedStyle = returnedStyle + " card-kopra-full-width";
        }

        if (isFullHeight) {
            returnedStyle = returnedStyle + " card-kopra-full-height";
        }

        if (isVAWidth) {
            returnedStyle = returnedStyle + " card-va-width";
        }
        if (isCustomWidth) {
            returnedStyle = returnedStyle + " card-width";
        }

        if (isVAWidth) {
            returnedStyle = returnedStyle + " card-va-width";
        }

        if (isVA2Width) {
            returnedStyle = returnedStyle + " card-va2-width";
        }
        if (isPadding2) {
            returnedStyle = returnedStyle + " card-padding-2";
        }
        if (isBorderRadius2) {
            returnedStyle = returnedStyle + " card-border-radius-2";
        }

        if (isTextLeft) {
            returnedStyle = returnedStyle + " text-left";
        }

        if (isPositionRelative) {
            returnedStyle = returnedStyle + " position-relative";
        }

        if (overflowY) {
            returnedStyle  = returnedStyle + " overflow-vertical-card"
        }

        return returnedStyle;
    };

    render() {
        const {children, onClick} = this.props;
        return <div className={this.handleStyle()} onClick={onClick}>{children}</div>;
    }
}
