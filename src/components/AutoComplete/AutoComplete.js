import './style.css'

import React, { useEffect, useState } from "react";

import { AutoComplete as AutoCompleteAntd } from 'antd';
import styled from 'styled-components';

const Autocomplete = (props) => {console.log('ge',props)
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [userInput, setUserInput] = useState(props?.value);
    const onChange = e => {
      setUserInput(e);
    };
    useEffect(()=>{
      setUserInput(props?.value)
    },[props])

   const onSearch = (searchText) => {
    const { options } = props;
    const result = !searchText ? [] : options?.filter(
      suggestion =>
        suggestion?.value.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    setFilteredSuggestions(result)
  };
    return (
        <CustomAutoComplete
          placeholder={props.placeholder}
          onChange={onChange}
          dropdownClassName='dropdownAutoComplete'
          options={filteredSuggestions}
          onSearch={onSearch}
          // onKeyDown={onKeyDown}
          value={userInput}
        />
    );
  }
  
  export default Autocomplete;

const CustomAutoComplete = styled(AutoCompleteAntd)`
  &.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px !important;
    border-radius: 6px !important;
  }
  &.ant-select-selection-search, .ant-select-selection-placeholder {
    display: flex;
    align-self: center;
  }
  &.ant-select-single .ant-select-selector .ant-select-selection-search {
    top: unset !important;
    bottom: unset !important;
    align-self: center;
  }
`