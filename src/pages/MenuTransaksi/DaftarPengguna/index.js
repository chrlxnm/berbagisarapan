import "./styles.css"
import './styled.js'

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent,useState } from "react";
import { WrapperPagination, WrapperSelect, styleBtnDownload } from "./styled.js";
import CustomModalAddPengguna from "./component/CustomModalAddPengguna";
import CustomModalEditPengguna from "./component/CustomModalEditPengguna";
import { Label } from "../../../components";

console.log('masuk')
const DaftarPengguna = () => {


    const handleChangeEdit = (record) => {
        console.log(record)
        setModalEditPengguna({
            title:'Edit Data',
            visible:true,
            content:record,
            handleCancel: () => {
                setModalEditPengguna({
                    ...modalEditPengguna,
                    visible: false
                });
            }
        })
    }
 
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Mobile Phone',
        key: 'mobilePhone',
        dataIndex: 'mobilePhone',
       
      },
      {
        title: 'Sex',
        key: 'sex',
        dataIndex: 'sex',
      },
      {
        title: 'Division',
        key: 'division',
        dataIndex: 'division',
      },
      {
        title: 'Team',
        key: 'team',
        dataIndex: 'team',
      },
      {
        title: 'Class',
        key: 'class',
        dataIndex: 'class',
      },
      {
        title: 'Level Admin',
        key: 'levelAdmin',
        dataIndex: 'levelAdmin',
      },
      {
        title: 'Is Active',
        key: 'isActive',
        dataIndex: 'isActive',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">    
            <FaIcons.FaRegTrashAlt style={{width:'24px', height:'24px',color:'#BB0001'}}/>
            <FiIcons.FiEdit style={{width:'24px', height:'24px',color:'#3E903B'}} onClick={()=>handleChangeEdit(record)} />
          </Space>
        ),
      },
    ];

    const [modalAddPengguna, setModalInputPengguna] = useState({
        title: 'Add Data',
        content: '',
        visible: false,
        handleOk: null,
        handleCancel: null,
    });

    const [modalEditPengguna, setModalEditPengguna] = useState({
        title: '',
        content: '',
        visible: false,
        handleOk: null,
        handleCancel: null,
    });


    const { Option } = Select;
    const dummyData =  [
      {
        key: '1',
        name: 'John samsoe',
        username: 'aselolejos',
        email: 'emaildududu@email.com',
        mobilePhone: '123456789010',
        sex:'Wanita',
        division:'Perkap',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'No',
      },
      {
        key: '2',
        name: 'John budi',
        username: 'aselolejos',
        email: 'emaillalala@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '3',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '4',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '5',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '6',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '7',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
      {
        key: '8',
        name: 'John Sins',
        username: 'aselolejos',
        email: 'emailjingan@email.com',
        mobilePhone: '123456789010',
        sex:'Pria',
        division:'Staff',
        team:'Staff',
        class:'Staff',
        levelAdmin:'Staff',
        isActive:'Yes',
      },
    ];

   
    return (
        
        <Card className="home" style={{ borderRadius:16}}>
            {console.log(modalAddPengguna.visible)}
                <CustomModalAddPengguna
                    title={modalAddPengguna.title}
                    isVisible={modalAddPengguna.visible}
                    handleCancel={modalAddPengguna.handleCancel}
                />

                <CustomModalEditPengguna
                   title={modalEditPengguna.title}
                   isVisible={modalEditPengguna.visible}
                   handleCancel={modalEditPengguna.handleCancel}
                   content={modalEditPengguna.content}
                />

            <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>Daftar Pengguna</h1></Row>
            <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Daftar Pengguna</h1></Row>
            <Row className="rowSearch" xl={24}>
                <Col xl={20}>
                <Input 
                  placeholder='Cari disini'
                  size='large'
                  className="daftarpenggunaSearchBox"
                  // onChange={(e)=>handleInputState(e)}
                  // disabled={Number(selectedSearchType)===4}
                  // onKeyPress={(e)=>handleInputState(e)}
                  prefix={<SearchOutlined />}
                  />
                </Col>
                <Col xl={4}>
                  <div className="btnGroup">
                        <Button className="btnDownload" type="primary" style={{color:'#3E903B', borderColor:'#3E903B'}} ghost>
                          Download
                        </Button>
                      <Button className="btnAdd" type="primary"
                        onClick={()=> {
                            setModalInputPengguna({
                                visible:true,
                                handleCancel: () => {
                                    setModalInputPengguna({
                                        ...modalAddPengguna,
                                        title:'Add Data',
                                        visible: false,
                                        content: modalEditPengguna.content
                                    });
                                }
                            })
                        }}
                      icon={<AiIcons.AiOutlinePlus />}>
                        Add
                      </Button>
                  </div>
                </Col>                  
            </Row>

            <Row className="tableData" xl={24} >
                <Table 
                  style={{width:"100%"}} 
                  columns={columns} 
                  dataSource={dummyData}
                  pagination={false} 
                 />
            </Row>

            <Divider style={{marginTop: '1rem'}} />

            <Row xl={24} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Col xl={10} style={{display:'flex'}}>
                <Space>
                  <h3 style={{marginBottom: 'unset'}}>Data yang ditampilkan</h3>
                  <WrapperSelect>
                    <Select  defaultValue={10} >
                      <Option value={10}>10</Option>
                      <Option value={20}>20</Option>
                      <Option value={50}>50</Option>
                    </Select>
                  </WrapperSelect>
                </Space>
              </Col>
              <Col xl={14}>
              <WrapperPagination>
                <Pagination
                    // onChange={handlePaginationChange}
                    showSizeChanger={false}
                    current={1}
                    size={10}
                    total={100}
                    />
              </WrapperPagination>
              </Col>
            </Row>
            
        </Card>
    );
    

    
  }


export default DaftarPengguna;
