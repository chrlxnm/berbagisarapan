import "./styles.css"
import './styled.js'

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { ButtonFilter, WrapperPagination, WrapperSearchFilter, WrapperSelect, styleBtnDownload } from "./styled.js";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent, useEffect, useState } from "react";
import { downloadExcelData } from "../../../helpers/services";
import AddModal from "./Modal/AddEditModal";
import ConfirmDeleteModal from "../../../components/Modal/ConfirmDeleteModal";
import AlertNew from "../../../components/AlertNew";

import { ReactComponent as IconFilter1 } from '../../../assets/svg/icon-filter1.svg';
import { dummy } from "./dummy";
import errorAlert from "../../../components/alert/errorAlert";
import successAlert from "../../../components/alert/successAlert";

const DaftarPengguna = () => {
  const dataSource =  dummy();
  let [data, setData] =  useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({
    size: 10,
    current: 1,
    total: dataSource ? dataSource.length : 0,
  })

  useEffect(() => {
    dataPage(dataSource, page);
  },[])

  const handlePaginationChange = (e) => {
    let temp = ({...page,
      current: e
    });
    setPage(temp);
    dataPage(dataSource, temp);
  }

  const [visible,setVisible] = useState({
    isVisible:false,
    type:'SUCCESS',
    message:'Berhasil submit'
  })
  const handleSizeChange = (e) => {
    let temp = ({...page,
      current: 1,
      size:e
    });
    setPage(temp);
    dataPage(dataSource, temp);
  }
  
  const dataPage = (data, params) => {
    setLoading(true);
    setData(data?.slice((params.current-1)* params.size, params.current * params.size));
    setLoading(false);
  }
  
  const handleSearch = (e) => {
    setLoading(true)
    let searchValue = e.target.value
    let columns = ["mobilePhone", "nama", "username", "email", "sex", "division", "team", "class", "levelAdmin", "isActive"];
    let temp = dataSource.filter((item) => {
      return columns?.some((newItem) => {
          return (
              item[newItem]
                  ?.toString()
                  ?.toLowerCase()
                  ?.indexOf(searchValue.toLowerCase()) > -1
                );
            });
        });
    let tempParams = {...page,
              current: 1,
              total: temp.length
            }
    dataPage(temp, tempParams)
    setPage(tempParams)
    setLoading(false)
  }

  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const handleDelete = () => {
    setVisible({...visible,isVisible:true,type:'SUCCESS',message:'Berhasil Submit'})
    setVisibleDeleteModal(false)
  }
  const [modal, setModal] = useState({
    visible: false,
    title: 'Add Data',
  })
  const handleOkModal = (data) => {
    console.log(data);
    setVisible({...visible,isVisible:true,type:'ERROR',message:'Gagal Submit'})
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
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username)
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email)
      },
      {
        title: 'Mobile Phone',
        key: 'mobilePhone',
        dataIndex: 'mobilePhone',
        sorter: (a, b) => a.mobilePhone.localeCompare(b.mobilePhone)
       
      },
      {
        title: 'Sex',
        key: 'sex',
        dataIndex: 'sex',
        sorter: (a, b) => a.sex.localeCompare(b.sex)
      },
      {
        title: 'Division',
        key: 'division',
        dataIndex: 'division',
        sorter: (a, b) => a.division.localeCompare(b.division)
      },
      {
        title: 'Team',
        key: 'team',
        dataIndex: 'team',
        sorter: (a, b) => a.team.localeCompare(b.team)
      },
      {
        title: 'Class',
        key: 'class',
        dataIndex: 'class',
        sorter: (a, b) => a.class.localeCompare(b.class)
      },
      {
        title: 'Level Admin',
        key: 'levelAdmin',
        dataIndex: 'levelAdmin',
        sorter: (a, b) => a.levelAdmin.localeCompare(b.levelAdmin)
      },
      {
        title: 'Is Active',
        key: 'isActive',
        dataIndex: 'isActive',
        sorter: (a, b) => a.isActive.localeCompare(b.isActive)
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

    const { Option } = Select;

    return (
        <Card className="home" style={{ borderRadius:16}}>
          <AlertNew
                visible={visible.isVisible}
                message={visible.message}
                type={visible.type}
                onClose={() => {
                    setVisible({...visible,isVisible:false})
                    }
                }
            />
          <AddModal 
          visible={modal?.visible}
          handleCancel={handleCancelModal}
          handleOk={handleOkModal}
          title={modal?.title}
          data={modal?.data} 
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
                  <WrapperSearchFilter>
                <Input 
                  placeholder='Cari disini'
                  size='large'
                  className="daftarpenggunaSearchBox"
                  onChange={handleSearch}
                  // onChange={(e)=>handleInputState(e)}
                  // disabled={Number(selectedSearchType)===4}
                  // onKeyPress={(e)=>handleInputState(e)}
                  prefix={<SearchOutlined />}
                  />
                  </WrapperSearchFilter>
                </Col>
                <Col span={4}>
                  <div className="btnGroup">
                        <Button className="btnDownload" type="primary" style={{color:'#3E903B', borderColor:'#3E903B'}} ghost onClick={()=>downloadExcelData(data,'daftarPengguna')}>
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
                  dataSource={data}
                  pagination={false} 
                 />
            </Row>

            {/* <Divider style={{marginTop: '1rem'}} /> */}
  
            <Row xl={24} style={{marginTop: '1rem', marginBottom: '1rem'}}>
                <Col xl={10} style={{display:'flex'}}>
                  <Space>
                    <h3 style={{marginBottom: 'unset'}}>Data yang ditampilkan</h3>
                    <WrapperSelect>
                      <Select  defaultValue={10} 
                      onChange={handleSizeChange}>
                        <Option value={10}>10</Option>
                        <Option value={20}>20</Option>
                        <Option value={50}>50</Option>
                        <Option value={100}>100</Option>
                      </Select>
                    </WrapperSelect>
                  </Space>
                </Col>
                <Col xl={14}>
                <WrapperPagination>
                <Pagination
                      className='custom-pagination-bs'
                      onChange={handlePaginationChange}
                      showSizeChanger={true}
                      current={page.current}
                      pageSize={page.size}
                      total={page.total}
                      />
                </WrapperPagination>
                </Col>
              </Row>
            
        </Card>
    );
    

    
  }


export default DaftarPengguna;
