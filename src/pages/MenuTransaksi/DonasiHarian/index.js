import './style.css'

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
import { dummy } from './dummy';
import errorAlert from "../../../components/alert/errorAlert";
import successAlert from "../../../components/alert/successAlert";

const DonasiHarian = () => {
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
    let columns = ["noWA", "nama", "donasi", "tanggal", "program", "url", "namaBank", "admin"];
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
      errorAlert('gagal submit')
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
          title: 'Tanggal',
          dataIndex: 'tanggal',
          key: 'tanggal',
          sorter: (a, b) => a.tanggal.localeCompare(b.tanggal)
        },
        {
          title: 'Donasi',
          key: 'donasi',
          dataIndex: 'donasi',
          sorter: (a, b) => a.donasi.localeCompare(b.donasi)
         
        },
        {
          title: 'Program',
          key: 'program',
          dataIndex: 'program',
          sorter: (a, b) => a.program.localeCompare(b.program)
        },
        {
          title: 'URL Bukti',
          key: 'url',
          dataIndex: 'url',
          sorter: (a, b) => a.url.localeCompare(b.url)
        },
        {
          title: 'Nama Bank',
          key: 'namaBank',
          dataIndex: 'namaBank',
          sorter: (a, b) => a.namaBank.localeCompare(b.namaBank)
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
        //       <FiIcons.FiEdit style={{width:'24px', height:'24px',color:'#3E903B', cursor: 'pointer'}} />
        //     </Space>
        //   ),
        // },
      ];

      const { Option } = Select;
      
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
                    onChange={handleSearch}
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

export default DonasiHarian