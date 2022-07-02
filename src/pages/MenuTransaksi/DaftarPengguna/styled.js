import styled from 'styled-components';



export const WrapperPagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  
  & .ant-pagination-item, .ant-pagination-item-link {
    border-radius: 6px;
  }
  & .ant-pagination-item-active {
    background: #3E903B !important;
  }
  & .ant-pagination-item-active a {
    color: #FFFF;
  }
  & .ant-pagination-item-active {  
    border: none;
  }
`

export const WrapperSelect = styled.div` 
 & .ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:6px
 }
`

export const WrapperSelectWithHeight = styled.div` 
 & .ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:6px;
    height:50px;
 }
 & .ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 50px;
}
`

export const styleBtnDownload = styled.div`
 &   .ant-btn-background-ghost.ant-btn-primary {
        color: #3E903B;
        border-color: #3E903B;
        text-shadow: none;
    }
`