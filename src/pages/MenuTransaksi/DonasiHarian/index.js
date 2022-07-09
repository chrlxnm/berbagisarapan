import './style.css'

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Col, Divider, Input, Pagination, Row, Select, Space, Table } from 'antd';
import { ButtonFilter, WrapperPagination, WrapperSearchFilter, WrapperSelect } from './styled';
import { ButtonPrimary, ButtonSecondary } from '../../../components/Button/Button';
import React, { useState } from 'react'

import AddModal from './Modal/Modal';
import FilterModal from './Modal/FilterModal';
import HeaderTitle from '../../../components/HeaderTitle/HeaderTitle';
import { ReactComponent as IconFilter1 } from '../../../assets/svg/icon-filter1.svg';
import { SearchOutlined } from '@ant-design/icons';
import { dummy } from './dummy';

const DonasiHarian = () => {
    const [modal, setModal] = useState({
      visible: false,
      title: 'Add Data',
    })
    const [filterModal, setFilterModal] = useState(false)

    const handleCancelFilterModal = () => {
      setFilterModal(false)
    }

    const handleOkFilterModal = () => {
      setFilterModal(false)
    }

    const handleOkModal = (data) => {
      console.log('cek data',data)
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

    const columns = [
        {
          title: 'No WA',
          dataIndex: 'noWA',
          key: 'noWA'
        },
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
        },
        {
          title: 'Tanggal',
          dataIndex: 'tanggal',
          key: 'tanggal',
        },
        {
          title: 'Donasi',
          key: 'donasi',
          dataIndex: 'donasi',
         
        },
        {
          title: 'Program',
          key: 'program',
          dataIndex: 'program',
        },
        {
          title: 'URL Bukti',
          key: 'url',
          dataIndex: 'url',
        },
        {
          title: 'Nama Bank',
          key: 'namaBank',
          dataIndex: 'namaBank',
        },
        {
          title: 'Admin',
          key: 'admin',
          dataIndex: 'admin',
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">    
        //       <FaIcons.FaRegTrashAlt style={{width:'24px', height:'24px',color:'#BB0001', cursor: 'pointer'}}/>
        //       <FiIcons.FiEdit style={{width:'24px', height:'24px',color:'#3E903B', cursor: 'pointer'}} />
        //     </Space>
        //   ),
        // },
      ];
  
      const { Option } = Select;
      
      const dummyData =  dummy()
  
     
      return (<>
          <AddModal 
          visible={modal?.visible}
          handleCancel={handleCancelModal}
          handleOk={handleOkModal}
          title={modal?.title} />
          <FilterModal 
          visible={filterModal}
          handleCancel={handleCancelFilterModal}
          handleOk={handleOkFilterModal} />

          <Card className="home" style={{ borderRadius:16}}>
              <HeaderTitle title={"Donasi Harian"} subTitle={"Donasi Harian"} />
              <Row className="rowSearch">
                  <Col span={20}>
                  <WrapperSearchFilter>
                  <Input 
                    placeholder='Cari disini'
                    size='large'
                    className="daftarpenggunaSearchBox"
                    // onChange={(e)=>handleInputState(e)}
                    // disabled={Number(selectedSearchType)===4}
                    // onKeyPress={(e)=>handleInputState(e)}
                    prefix={<SearchOutlined />}
                    />
                    <ButtonFilter onClick={()=> setFilterModal(true)}>
                      <IconFilter1 style={{marginRight: 'unset !important'}} />
                    </ButtonFilter>
                    </WrapperSearchFilter>
                  </Col>
                  <Col span={4}>
                    <div style={{display: 'flex',gap:'1rem'}}>
                          <ButtonSecondary>
                            Download
                          </ButtonSecondary>
                        <ButtonPrimary icon={<AiIcons.AiOutlinePlus />}
                        onClick={()=>setModal({
                          visible: true,
                          title: 'Add Data'
                        })}>
                          Add
                        </ButtonPrimary>
                    </div>
                  </Col>                  
              </Row>
  
              <Row className="tableData" xl={24} >
                  <Table 
                    style={{width:"100%"}} 
                    columns={columns} 
                    dataSource={dummyData}
                    // pagination={false} 
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
                      total={dummyData.length}
                      />
                </WrapperPagination>
                </Col>
              </Row> */}
              
          </Card></>
      );
}

export default DonasiHarian