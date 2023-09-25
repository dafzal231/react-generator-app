import React from 'react'
import "../../styles/globals.css";

import { Link } from 'react-router-dom';
import { navBar } from "../../constants/constants.js";

import { Avatar, Typography } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import logo from './logo.png'

const {Text, Title} = Typography;

const Nav = () => {
    return (
        <div className="nav">
            <div className='icon'>
                <img class="img" src={logo} alt="Icon"/>
            </div>

            <div className='title'>
            <Title style={{ color: 'white' }}>React Generator App</Title>
            </div>

            <div className='icons'>
                <Avatar size={'large'} shape="square" icon={<UserOutlined />} />
                <Avatar size={'large'} shape="square" icon={<BellOutlined />} />
            </div>
        </div>
    )
}

export default Nav;