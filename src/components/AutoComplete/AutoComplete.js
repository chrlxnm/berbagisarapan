import './style.css'

import { AutoComplete as AutoCompleteAntd, Form } from 'antd';
import React, { useEffect, useState } from "react";

import styled from 'styled-components';

const Autocomplete = (props) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [userInput, setUserInput] = useState(props?.value);
    const onChange = e => {
      let tempInput = userInput;
      const regex= /^[0-9]*$/;
      if(regex.test(e)){
      tempInput = e;
      setUserInput(tempInput)
      }
      props?.passingForm?.setFieldsValue({
        noWA:tempInput
      })
    };
    useEffect(()=>{
      setUserInput(props?.value)
    },[props])

   const onSearch = (searchText) => {
    let tempInput = userInput;
    const regex= /^[0-9]*$/;
    if(regex.test(searchText)){
    tempInput = searchText;
    }
    const { options } = props;
    const result = !tempInput ? [] : options?.filter(
      suggestion =>
        suggestion?.value.toLowerCase().indexOf(tempInput.toLowerCase()) > -1
    );
    setFilteredSuggestions(result)
  };
    return (
      <Form.Item 
      name={props.name}
      rules={[{ required: true, message: 'Please fill no WA' }]}>
        <CustomAutoComplete
          {...props}
          onChange={onChange}
          dropdownClassName='dropdownAutoComplete'
          options={filteredSuggestions}
          onSearch={onSearch}
          value={userInput}
        />
      </Form.Item>
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