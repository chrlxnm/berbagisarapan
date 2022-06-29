import "./styles.css"

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent } from "react";
import { Label } from "../../components";

class HomePage extends PureComponent {

 

  render() {
  
    return (
        <Card className="home" style={{ borderRadius:16}}>
            <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>HOME</h1></Row>
            <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Home</h1></Row>            
        </Card>
    );


    
  }
}

export default HomePage;
