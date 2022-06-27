import "./styles.css"

import { Card, Checkbox, Col, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Table, Typography } from 'antd';
import React, { PureComponent } from "react";

class HomePage extends PureComponent {
  render() {
    return (<>
        <Card className="home" style={{borderRadius:16}}>
          <div>
              <p>
                  Beranda
              </p>
              <p>
                  Beranda
              </p>
          </div>
            <div className="empty-screen-container">
                <h1> Home Page </h1>
            </div>
        </Card>
        </>
    );
  }
}

export default HomePage;
