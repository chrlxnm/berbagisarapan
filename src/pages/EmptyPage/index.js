import React, { PureComponent } from "react";
import { Label } from "../../components";
import { Card, Checkbox, Col, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Table, Typography } from 'antd';

import "./styles.css"

const { Footer, Content } = Layout;
class EmptyPage extends PureComponent {
  render() {
    return (
        <Layout className={'content-homepage'}>
            <Content className="content-page">
                <Card className="groupCard" style={{borderRadius:16, marginBottom: '2rem'}}>
                    <div className="empty-screen-container">
                        <Label label='Under Construction' isBlue />
                    </div>
                </Card>
            </Content>
        </Layout>
    );
  }
}

export default EmptyPage;
