import "./styles.css"

import { Card, Checkbox, Col, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Table, Typography } from 'antd';
import React, { PureComponent } from "react";

import { Label } from "../../components";

class HomePage extends PureComponent {
  render() {
    return (
        <Card className="groupCard" style={{borderRadius:16, marginBottom: '2rem'}}>
            <div className="empty-screen-container">
                <Label label='Home Page' isBlue isBold />
            </div>
        </Card>
    );
  }
}

export default HomePage;
