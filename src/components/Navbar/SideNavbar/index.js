import './index.css';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

import { Avatar, Popover } from 'antd';
import React, { useState } from 'react';

import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './data';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [visible, setVisible] = useState(false);

  const contentPopOver = (
    <div>
      <p className='other-services-p'
      onClick={()=>{
        setVisible(false);
      }}>Profile</p>
      <p className='other-services-p'
      onClick={()=>{
        setVisible(false);
      }}>Logout</p>
    </div>
  );

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <ProfileWrapper>
          <Popover
            // className="item-container"
            placement="bottomRight"
            content={contentPopOver}
            trigger="click"
            // visible={visible}
            // onVisibleChange={()=>setVisible(true)}
          >
            <Avatar
              className='ava-profile'
              style={{margin: 'unset'}}
              size={48}
              icon={<UserOutlined />}
            />
            </Popover>
          </ProfileWrapper>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border-radius: 100%;
  background-color: #f0f0f0;
  color: #000000;
  cursor: pointer;
  color: #fff;
  justify-content: flex-end;
`;