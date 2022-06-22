import "./styles.css"

import { Checkbox, Col, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Table, Typography } from 'antd';
import React, { PureComponent } from "react";

import Card from "../../components/Card";
import { Label } from "../../components";

class EmptyPage extends PureComponent {
  render() {
    return (
        <Card className="groupCard">
            <div className="empty-screen-container">
                <Label label='Under Construction' isBlue />
            </div>
        </Card>
    );
  }
}

export default EmptyPage;
