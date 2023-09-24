import React from 'react'
import "../../styles/globals.css";

import { Link } from 'react-router-dom';
import { navBar } from "../../constants/constants.js";

import { Avatar, Typography } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Nav = () => {
    return (
        <div className="nav">

            <div className='title'>
                <Title style={{color: 'white', opacity: 1}}>React Geneator App</Title>
            </div>

            <div className='icons'>
                <Avatar size={'large'} shape="square" icon={<UserOutlined />} />
                <Avatar size={'large'} shape="square" icon={<BellOutlined />} />
            </div>
        </div>
    )
}

export default Nav;