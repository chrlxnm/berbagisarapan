import React, { PureComponent } from "react";
import "./styles.css";

class Label extends PureComponent {
  handleText = () => {
    const { label } = this.props;
    return label;
  };

 

  handleStyle = () => {
    const {
      isBold,
      isBold2,
      isMediumBold,
      isBlack,
      isDarkBlue,
      isDarkerBlue,
      isBlue,
      isWhite,
      isYellow,
      noMargin,
      isLightBlue,
      isTiny,
      isSmall,
      isInfo,
      isHuge,
      isHuge2,
      isHuge3,
      isHuge4,
      isItalic,
      isCentered,
      isLeft,
      isOneHalfMargin,
      isOneHalfMargin2,
      isUnderlined,
      isErrorMessage,
      isLink,
      textBlack,
      marginLeft1,
      marginLeft2,
      marginLeft3,
      marginLeft4,
      marginLeft5,
      marginLeft6,
      marginLeft7,
      marginLeft8,
      marginRight,
      marginTop,
      marginTop2,
      marginBottom1,
      marginBottom2,
      marginTop3,
      noMarginBottom,
      paddingTopSmall,
      fontSmall,
      verticalMiddle,
      tableLabel,
      isPrimaryDiv,
      isSecondaryDiv,
      isInlineBlockDisplay,
      isJustify,
      isJustifyLeft,
      isContent,
      isLabel,
      isLabelCustom,
      isLabelCustom2
    } = this.props;
    let returnedClass = "textNormal";
    if (isBold) {
      returnedClass = returnedClass + " textBold";
    }if (isBold2) {
      returnedClass = returnedClass + " textBold2";
    }
    if (isMediumBold) {
      returnedClass = returnedClass + " textMediumBold";
    }
    if(isBlack){
      returnedClass = returnedClass + " textBlack";
    }
    if (isBlue) {
      returnedClass = returnedClass + " textBlue";
    }
    if (isWhite) {
      returnedClass = returnedClass + " textWhite";
    }
    if (noMargin) {
      returnedClass = returnedClass + " textNoMargin";
    }
    if (isLightBlue) {
      returnedClass = returnedClass + " textLightBlue";
    }
    if (isDarkBlue) {
      returnedClass = returnedClass + " textDarkBlue";
    }
    if (isDarkerBlue) {
      returnedClass = returnedClass + " textDarkerBlue";
    }
    if (isOneHalfMargin) {
      returnedClass = returnedClass + " textOneHalfMargin";
    }
    if (isOneHalfMargin2) {
      returnedClass = returnedClass + " textOneHalfMargin2";
    }
    if (isCentered) {
      returnedClass = returnedClass + " textCentered";
    }
    if (isTiny) {
      returnedClass = returnedClass + " textTiny";
    }
    if (isSmall) {
      returnedClass = returnedClass + " textSmall";
    }
    if (isInfo) {
      returnedClass = returnedClass + " textInfo";
    }
    if(isUnderlined){
      returnedClass = returnedClass + " textUnderlined"
    }
    if (isLeft) {
      returnedClass = returnedClass + " textLeft";
    }
    if(isHuge) {
      returnedClass = returnedClass + " textHuge";
    }
    if(isHuge2) {
      returnedClass = returnedClass + " textHuge2";
    }
    if(isHuge3) {
      returnedClass = returnedClass + " textHuge3";
    }
    if(isHuge4) {
      returnedClass = returnedClass + " textHuge4";
    }
    if(isItalic) {
      returnedClass = returnedClass + " italicted";
    }
    if(isLink){
      returnedClass = returnedClass + " textLink";
    }
    if(textBlack){
      returnedClass = returnedClass + " textBlack";
    }
    if(marginLeft1){
      returnedClass = returnedClass + " marginLeft1";
    }
    if(marginLeft2){
      returnedClass = returnedClass + " marginLeft2";
    }
    if(marginLeft3){
      returnedClass = returnedClass + " marginLeft3";
    }
    if(marginLeft4){
      returnedClass = returnedClass + " marginLeft4";
    }
    if(marginLeft5){
      returnedClass = returnedClass + " marginLeft5";
    }
    if(marginLeft6){
      returnedClass = returnedClass + " marginLeft6";
    }
    if(marginLeft7){
      returnedClass = returnedClass + " marginLeft7";
    }
    if(marginLeft8){
      returnedClass = returnedClass + " marginLeft8";
    }
    if(marginRight){
      returnedClass = returnedClass + " marginRight";
    }
    if(marginTop){
      returnedClass = returnedClass + " marginTop";
    }
    if(marginTop2){
      returnedClass = returnedClass + " marginTop2";
    }
    if(marginBottom1){
      returnedClass = returnedClass + " marginBottom1";
    }
    if(marginBottom2){
      returnedClass = returnedClass + " marginBottom2";
    }
    if(marginTop3){
      returnedClass = returnedClass + " marginTop3";
    }
    if(noMarginBottom){
      returnedClass = returnedClass + " noMarginBottom";
    }
    if(paddingTopSmall){
      returnedClass = returnedClass + " paddingTopSmall";
    }
    if(fontSmall){
      returnedClass = returnedClass + " fontSmall";
    }
    if(isErrorMessage){
      returnedClass = returnedClass + " errorMessage";
    }
    if(tableLabel){
      returnedClass = returnedClass + " tableLabel";
    }
    if(isPrimaryDiv){
      returnedClass = returnedClass + " primaryDiv";
    }
    if(isSecondaryDiv){
      returnedClass = returnedClass + " secondaryDiv";
    }
    if(isInlineBlockDisplay){
      returnedClass = returnedClass + " inlineBlockDisplay";
    } 
    if(isJustify){
      returnedClass = returnedClass + " justify";
    }
    if(isJustifyLeft){
      returnedClass = returnedClass + " justify-left";
    }
    if(isContent){
      returnedClass = returnedClass + " content";
    }
    if(isLabel){
      returnedClass = returnedClass + " label";
    }
    if(isLabelCustom){
      returnedClass = returnedClass + " labelCustom"
    }
    if(isLabelCustom2){
      returnedClass = returnedClass + " labelCustom2"
    }
    if(isYellow){
      returnedClass = returnedClass + " textYellow";
    }

    return returnedClass;

    
    
    
    
    
    
    
    
    
    
    
    
    
  };

  render() {
    return (<p className={this.handleStyle()}>{this.handleText()}</p>);
  }
  
}


export default Label;
