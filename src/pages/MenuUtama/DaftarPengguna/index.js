import "./styles.css"
import './styled.js'

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent, useState } from "react";

import AddModal from "./Modal/AddEditModal";
import ConfirmDeleteModal from "../../../components/Modal/ConfirmDeleteModal";
import FilterModal from './Modal/FilterModal';
import { dummy } from "./dummy";

const DaftarPengguna = () => {
  const [filterModal, setFilterModal] = useState(false)

  const handleCancelFilterModal = () => {
    setFilterModal(false)
  }

  const handleOkFilterModal = () => {
    setFilterModal(false)
  }
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const handleDelete = () => {
    setVisibleDeleteModal(false)
  }
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
          setModal({
            visible: true,
            title: 'Edit Data',
            data: record
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
            <FaIcons.FaRegTrashAlt style={{width:'24px', height:'24px',color:'#BB0001', cursor: 'pointer'}} onClick={()=>setVisibleDeleteModal(true)}/>
            <FiIcons.FiEdit style={{width:'24px', height:'24px',color:'#3E903B', cursor: 'pointer'}} onClick={()=>handleChangeEdit(record)} />
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
    const dummyData =  dummy()

   
    return (
        <Card className="home" style={{ borderRadius:16}}>

          <AddModal 
          visible={modal?.visible}
          handleCancel={handleCancelModal}
          handleOk={handleOkModal}
          title={modal?.title}
          data={modal?.data} 
          />

          <FilterModal 
          visible={filterModal}
          handleCancel={handleCancelFilterModal}
          handleOk={handleOkFilterModal} 
          />
          
          <ConfirmDeleteModal 
          visible={visibleDeleteModal}
          handleCancel={()=> setVisibleDeleteModal(false)}
          handleOk={handleDelete}
          />

            <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>Daftar Pengguna</h1></Row>
            <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Daftar Pengguna</h1></Row>
            <Row className="rowSearch">
                <Col span={20}>
                <Input 
                style={{marginRight:'1rem'}}
                  placeholder='Cari disini'
                  size='large'
                  className="daftarpenggunaSearchBox"
                  // onChange={(e)=>handleInputState(e)}
                  // disabled={Number(selectedSearchType)===4}
                  // onKeyPress={(e)=>handleInputState(e)}
                  prefix={<SearchOutlined />}
                  />
                  <Button className="btnCustom" type="primary" style={{padding:'0'}} onClick={()=> setFilterModal(true)}>
                    <BsIcons.BsFilter style={{width:'24px', height:'24px',color:'#3E903B', margin:'0'}}/>
                    </Button>
                </Col>
                <Col span={4}>
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


export default DaftarPengguna;
