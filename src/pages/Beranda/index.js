import "./style.css"

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import { Button, Card, Checkbox, Col, Divider, Dropdown, Form, Input, Layout, Menu, Pagination, Popover, Row, Select, Space, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PureComponent,useState,useEffect } from "react";
import { svgChart } from './styled';

import { Label } from "../../components";
import Chart from "react-apexcharts";
import { dummy } from './dummy';
import { convertBarNewUser } from "./convertData";

const Beranda = () => {
    console.log(dummy())
    const data = convertBarNewUser(dummy())
    const tahun = ['2019','2020','2021','2022']
    const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    const value = {
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Pertumbuhan donasi',
          align: 'center'
        },
        markers: {
          size: 5
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories:bulan,
        },
        yaxis: {
          title:{
            text:'Jumlah Donasi'
          }
        }
      },
      series: [{
        name: "2019",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148,443,812,554]
      },
      {
        name: "2020",
        data: [20, 11, 50, 20, 209, 99, 69, 91, 125,231,821,665]
      }
    ],
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: '400px',
              height:'400px'
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }

    const value2 = {
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Pertumbuhan Laporan Harian',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        markers: {
          size: 3
        },
        xaxis: {
          categories: tahun,
        },
        yaxis: {
          title:{
            text:'Jumlah PDC'
          }
        }
      },
      series: [{
        name: "Jan",
        data: [10, 41, 35, 51]
      },
      {
        name: "Feb",
        data: [30, 12, 90, 100]
      },
      {
        name: "Maret",
        data: [21, 31, 40, 50]
      },
      {
        name: "April",
        data: [90, 11, 50, 20]
      },
      {
        name: "Mei",
        data: [80, 11, 10, 400]
      },
      {
        name: "Juni",
        data: [20, 11, 30, 20]
      }
    ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '500px',
              height:'500px'
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }

  const config_bar1 = {
          
    series: [{
      name: 'Jumlah',
      data: data.value
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: data.labels,
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          }
        }
      
      },
      title: {
        text: 'Jumlah donatur baru per bulan',
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  }
  
    return (
        <Card className="home" style={{ borderRadius:16}}>
            <Row><h1 style={{fontSize:'24px',fontWeight:'bold'}}>Beranda</h1></Row>
            <Row><h1 style={{fontSize:'14px', color:'#828282'}}>Beranda</h1></Row> 
            <br></br>
            <br></br>    
            <Row xl={24}>
              <Col xl={12}>
                  <Chart options={value.options} series={value.series} type="line" height={400} />
              </Col>
              <Col xl={12}>
                  <Chart options={config_bar1.options} series={config_bar1.series} type="bar" height={440} />
              </Col>
            </Row>
        </Card>
    );
    }
export default Beranda;
