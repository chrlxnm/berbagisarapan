import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Col, Divider, Input, Pagination, Row, Select, Space, Table } from 'antd';
import { ButtonFilter, WrapperPagination, WrapperSearchFilter, WrapperSelect } from './styled';
import { ButtonPrimary, ButtonSecondary } from '../../../components/Button/Button';
import React, { useEffect, useState } from 'react'

import AddModal from './Modal/Modal';
import FilterModal from './Modal/FilterModal';
import HeaderTitle from '../../../components/HeaderTitle/HeaderTitle';
import { ReactComponent as IconFilter1 } from '../../../assets/svg/icon-filter1.svg';
import { SearchOutlined } from '@ant-design/icons';
import { downloadExcelData } from '../../../helpers/services';
import { dummy } from './dummy';
import AlertNew from '../../../components/AlertNew';

const LaporanHarian = () => {
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
    let columns = ["noWA", "nama", "laporan", "tanggal", "admin"]
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
  }

  const [filterModal, setFilterModal] = useState(false)
  const [visible,setVisible] = useState({
    isVisible:false,
    type:'SUCCESS',
    message:'Berhasil submit'
  })
  const handleCancelFilterModal = () => {
    setFilterModal(false)
  }

  const handleOkFilterModal = (data) => {
    setFilterModal(false)
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
    setVisible({...visible,isVisible:true,type:'SUCCESS',message:'Berhasil Submit'})

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
          key: 'noWA',
          sorter: (a, b) => a.noWA.localeCompare(b.noWA)
        },
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
          sorter: (a, b) => a.nama.localeCompare(b.nama)
        },
        {
          title: 'Laporan',
          dataIndex: 'laporan',
          key: 'laporan',
          sorter: (a, b) => a.laporan.localeCompare(b.laporan)
        },
        {
          title: 'Tanggal',
          key: 'tanggal',
          dataIndex: 'tanggal',
          sorter: (a, b) => a.tanggal.localeCompare(b.tanggal)
        },
        {
          title: 'Admin',
          key: 'admin',
          dataIndex: 'admin',
          sorter: (a, b) => a.admin.localeCompare(b.admin)
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">    
        //       <FaIcons.FaRegTrashAlt style={{width:'24px', height:'24px',color:'#BB0001', cursor: 'pointer'}}/>
        //       <FiIcons.FiEdit 
        //         style={{width:'24px', height:'24px',color:'#3E903B', cursor: 'pointer'}} 
        //         onClick={()=>{console.log('hahaha', record)
        //           setModal({
        //           visible: true,
        //           title: 'Edit Data',
        //           record: record
        //         })}}/>
        //     </Space>
        //   ),
        // },
      ];
  
      const { Option } = Select;
      
      const dummyData =  dummy();
  
     
      return (<>

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
        record={modal?.record}
        />
        
        <FilterModal 
          visible={filterModal}
          handleCancel={handleCancelFilterModal}
          handleOk={handleOkFilterModal} 
          />

          <Card className="home" style={{ borderRadius:16}}>
              <HeaderTitle title={"Laporan Harian"} subTitle={"Laporan Harian"} />
              <Row className="rowSearch">
                  <Col span={20}>
                  <WrapperSearchFilter>
                  <Input 
                    placeholder='Cari disini'
                    size='large'
                    className="daftarpenggunaSearchBox"
                    onChange={handleSearch}
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
                          <ButtonSecondary onClick={()=> downloadExcelData(dataSource,'laporanHarian')}> 
                            Download
                          </ButtonSecondary>
                        <ButtonPrimary icon={<AiIcons.AiOutlinePlus />}
                        onClick={()=>
                          setModal({
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
                    loading={loading}
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
              
          </Card></>
      );
}

export default LaporanHarian