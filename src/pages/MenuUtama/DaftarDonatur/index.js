import "./styles.css"
import './styled.js'

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent, useState } from "react";
import { WrapperPagination, WrapperSelect, styleBtnDownload } from "./styled.js";

import AddModal from "./Modal/AddEditModal";
import CustomModalAddDonatur from "./component/CustomModalAddDonatur";
import CustomModalEditDonatur from "./component/CustomModalEditDonatur";
import { Label } from "../../../components";
import { dummy } from "./dummy";

console.log('masuk')
const DaftarDonatur = () => {
  const [modal, setModal] = useState({
    visible: false,
    title: 'Add Data',
  })
  const handleOkModal = () => {
    setModal({
      ...modal,
      visible: false
    })
  }
  const handleCancelModal = () => {
    setModal({
      ...modal,
      visible: false
    })
  }

    const handleChangeEdit = (record) => {
        console.log(record)
        setModalEditDonatur({
            title:'Edit Data',
            visible:true,
            content:record,
            handleCancel: () => {
                setModalEditDonatur({
                    ...modalEditDonatur,
                    visible: false
                });
            }
        })
    }
 
    const columns = [
      {
        title: 'No',
        key: 'no',
        render:(text, record) => <p>{record.key+1}</p>
      },
      {
        title: 'Panggilan',
        dataIndex: 'panggilan',
        key: 'panggilan',
      },
      {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Whatsapp',
        key: 'whatsapp',
        dataIndex: 'whatsapp',
       
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Agama',
        key: 'agama',
        dataIndex: 'agama',
      },
      {
        title: 'Hobi',
        key: 'hobi',
        dataIndex: 'hobi',
      },
      {
        title: 'Kota',
        key: 'kota',
        dataIndex: 'kota',
      },
      {
        title: 'Alamat',
        key: 'alamat',
        dataIndex: 'alamat',
      },
      {
        title: 'Berapa Kali',
        key: 'berapakali',
        dataIndex: 'berapakali',
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

    const [modalAddDonatur, setModalInputDonatur] = useState({
        title: 'Add Data',
        content: '',
        visible: false,
        handleOk: null,
        handleCancel: null,
    });

    const [modalEditDonatur, setModalEditDonatur] = useState({
        title: 'Edit Data',
        content: '',
        visible: false,
        handleOk: null,
        handleCancel: null,
    });


    const { Option } = Select;
    
    const dummyData =  dummy()

   
    return (
        
        <Card className="home" style={{ borderRadius:16}}>
            {console.log(modalAddDonatur.visible)}
          <AddModal 
          visible={modal?.visible}
          handleCancel={handleCancelModal}
          handleOk={handleOkModal}
          title={modal?.title} />

            <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>Daftar Donatur</h1></Row>
            <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Daftar Donatur</h1></Row>
            <Row className="rowSearch" xl={24}>
                <Col xl={20}>
                <Space>
                    <Input 
                        placeholder='Cari disini'
                        size='large'
                        className="daftarDonaturSearchBox"
                        // onChange={(e)=>handleInputState(e)}
                        // disabled={Number(selectedSearchType)===4}
                        // onKeyPress={(e)=>handleInputState(e)}
                        prefix={<SearchOutlined />}
                        />
                   
                    <Button className="btnCustom" type="primary" style={{padding:'0'}}><BsIcons.BsFilter style={{width:'24px', height:'24px',color:'#3E903B', margin:'0'}}/></Button>
                    <Button className="btnCustom"   type="primary" style={{padding:'0'}}><AiIcons.AiOutlineLayout style={{width:'24px', height:'24px',color:'#3E903B', margin:'0'}}/></Button>
                  </Space>
                </Col>
                <Col xl={4}>
                  <div className="btnGroup">
                        <Button className="btnDownload" type="primary" style={{color:'#3E903B', borderColor:'#3E903B'}} ghost>
                          Download
                        </Button>
                      <Button className="btnAdd" type="primary"
                        onClick={()=> {
                          setModal({
                            visible: true,
                            title: 'Add Data'
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
                  pagination={true} 
                 />
            </Row>

            {/* <Divider style={{marginTop: '1rem'}} />

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
            </Row> */}
            
        </Card>
    );
    

    
  }


export default DaftarDonatur;
