import "./styles.css"
import './styled.js'

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Col, Input, Pagination,  Row, Select, Space, Table } from 'antd';
import {ButtonFilter, WrapperPagination, WrapperSelect} from "./styled.js";
import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import AlertNew from "../../../components/AlertNew";

import AddModal from "./Modal/AddEditModal";
import ConfirmDeleteModal from "../../../components/Modal/ConfirmDeleteModal";
import CustomColumnModal from "./Modal/CustomColumnModal";
import FilterModal from './Modal/FilterModal';
import { ReactComponent as IconFilter1 } from '../../../assets/svg/icon-filter1.svg';
import { downloadExcelData } from "../../../helpers/services";
import { dummy } from "./dummy";
import { filterData } from "./utils";
import UploadButton from "../../../components/UploadButton/UploadButton";
import { ButtonPrimary, ButtonSecondary } from "../../../components/Button/Button";

const DaftarDonatur = () => {
  const dataSource =  dummy();
  let [data, setData] =  useState([]);
  const [loading, setLoading] = useState(false);
  const [visible,setVisible] = useState({
    isVisible:false,
    type:'SUCCESS',
    message:'Berhasil submit'
  });
  const [page, setPage] = useState({
    size: 10,
    current: 1,
    total: dataSource ? dataSource.length : 0,
  });

  useEffect(() => {
    dataPage(dataSource, page);
  },[])

  const handlePaginationChange = (e) => {
    let temp = ({...page,
      current: e
    });
    setPage(temp);
    dataPage(dataSource, temp);
  };

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
    let columns = ['panggilan', 'nama', 'noWA', 'email', 'agama', 'hobi', 'kota', 'alamat'];
    let temp = dataSource.filter((item) => {
      return columns.some((newItem) => {
          return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) > -1
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
  };

  const [customColumns, setCustomColumns] = useState([
    'no','panggilan', 'nama', 'noWA', 'email', 'agama', 'hobi', 'kota', 'alamat', 'berapaKali', 'action'
  ]);
  const [filterModal, setFilterModal] = useState(false);

  const handleCancelFilterModal = () => {
    setFilterModal(false)
  };

  const handleOkFilterModal = (params) => {
    setFilterModal(false);
    setLoading(true);
    setData(filterData(dataSource, params));
    setLoading(false);
  };
  const [modal, setModal] = useState({
    visible: false,
    title: 'Add Data',
  });
  const [modalCustom, setModalCustom] = useState({
    visible: false,
    title: 'Customize Columns',
  });
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const handleOkModal = (data) => {
    setVisible({...visible,isVisible:true,type:'ERROR',message:'Gagal Submit'})
    setModal({
      ...modal,
      visible: false
    })
  };
  const handleCancelModal = () => {
    setModal({
      ...modal,
      visible: false
    })
  };

  const handleOkModalCustom = (checked) => {
    setCustomColumns([...checked, 'no', 'action'])
    setModalCustom({
      ...modalCustom,
      visible: false
    })
  };
  const handleCancelModalCustom = () => {
    setModalCustom({
      ...modalCustom,
      visible: false
    })
  };

  const handleDelete = () => {
    setVisible({...visible,isVisible:true,type:'SUCCESS',message:'Berhasil Submit'})
    setVisibleDeleteModal(false)
  };

  const handleChangeEdit = (record) => {
    setModal({
      visible: true,
      title: 'Edit Data',
      data: record
    })
  };
 
  const columns = [
    {
      title: 'No',
      key: 'no',
      render:(text, record, index) => <p>{index+1}</p>
    },
    {
      title: 'Panggilan',
      dataIndex: 'panggilan',
      key: 'panggilan',
      sorter: (a, b) => a.panggilan.localeCompare(b.panggilan)
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
      sorter: (a, b) => a.nama.localeCompare(b.nama)
    },
    {
      title: 'Whatsapp',
      key: 'noWA',
      dataIndex: 'noWA',
      sorter: (a, b) => a.noWA.localeCompare(b.noWA)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
      title: 'Agama',
      key: 'agama',
      dataIndex: 'agama',
      sorter: (a, b) => a.agama.localeCompare(b.agama)
    },
    {
      title: 'Hobi',
      key: 'hobi',
      dataIndex: 'hobi',
      sorter: (a, b) => a.hobi.localeCompare(b.hobi)
    },
    {
      title: 'Kota',
      key: 'kota',
      dataIndex: 'kota',
      sorter: (a, b) => a.kota.localeCompare(b.kota)
    },
    {
      title: 'Alamat',
      key: 'alamat',
      dataIndex: 'alamat',
      sorter: (a, b) => a.alamat.localeCompare(b.alamat)
    },
    {
      title: 'Berapa Kali',
      key: 'berapaKali',
      dataIndex: 'berapaKali',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Total Donasi',
      key: 'totalDonasi',
      dataIndex: 'totalDonasi',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Date Added',
      key: 'dateAdded',
      dataIndex: 'dateAdded',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Program Favorit',
      key: 'programFavorit',
      dataIndex: 'programFavorit',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Kategori',
      key: 'kategori',
      dataIndex: 'kategori',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Hasil Survey',
      key: 'hasilSurvey',
      dataIndex: 'hasilSurvey',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'keterangan',
      key: 'keterangan',
      dataIndex: 'keterangan',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Admin',
      key: 'admin',
      dataIndex: 'admin',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
    },
    {
      title: 'Last Update',
      key: 'lastUpdate',
      dataIndex: 'lastUpdate',
      sorter: (a, b) => a.berapaKali.localeCompare(b.berapaKali)
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
  ].filter(item=> customColumns?.includes(item.key))
    
  const { Option } = Select;
   
  return (
      <Card className="home" style={{ borderRadius:16}}>
        <AlertNew
          visible={visible.isVisible}
          message={visible.message}
          type={visible.type}
          onClose={() => {
              setVisible({...visible,isVisible:false})
              }}
        />
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
        <CustomColumnModal 
          visible={modalCustom?.visible}
          existingColumns = {customColumns}
          handleCancel={handleCancelModalCustom}
          handleOk={handleOkModalCustom}
          title={modalCustom?.title}
        />
        <ConfirmDeleteModal 
          visible={visibleDeleteModal}
          handleCancel={()=> setVisibleDeleteModal(false)}
          handleOk={handleDelete}
        />

        <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>Daftar Donatur</h1></Row>
        <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Daftar Donatur</h1></Row>
        <Row className="rowSearch" gutter={[0, 16]}>
          <Col span={20}>
            <Space>
              <Input 
                placeholder='Cari disini'
                size='large'
                className="daftarDonaturSearchBox"
                onChange={handleSearch}
                prefix={<SearchOutlined />}
              />
              <ButtonFilter onClick={()=> setFilterModal(true)}>
                <IconFilter1 style={{marginRight: 'unset !important'}} />
              </ButtonFilter>
              <Button 
                className="btnCustom" 
                type="primary"
                style={{padding:'0'}}
                onClick={()=>{
                  setModalCustom({...modalCustom,
                    visible:true
                  })
                }}>
                <AiIcons.AiOutlineLayout style={{width:'24px', height:'24px',color:'#3E903B', margin:'0'}}/>
              </Button>
            </Space>
          </Col>
          <Col span={4}>
            <div className="btnGroup">
              <UploadButton
              setAlert = {setVisible}
              />
              <ButtonSecondary
              onClick={()=> downloadExcelData(dataSource,'daftarDonatur')} >
                Download
              </ ButtonSecondary>
              <ButtonPrimary
                style={{width: '88px'}} 
                onClick={()=> {
                  setModal({
                    visible: true,
                    title: 'Add Data'
                  })
                }}
              icon={<AiIcons.AiOutlinePlus />}>
                Add
              </ ButtonPrimary>
            </div>
          </Col>                  
        </Row>

        <Row className="tableData" xl={24} >
          <Table 
            style={{width:"100%"}} 
            columns={columns} 
            loading={loading}
            dataSource={data}
            pagination={false} 
            />
        </Row>

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
};

export default DaftarDonatur;