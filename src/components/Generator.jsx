import React from "react";

import Dashboard from "./Dashboard";
import Viewer from "./Viewer";

import { Avatar, Typography } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import "../styles/globals.css";

const Generator = () => {

    return (
        <div className="generator">
			<div className="gen-layout">
				<Dashboard>Hey</Dashboard>
				<Viewer>Hey</Viewer>
			</div>
        </div>
    )
}

export default Generator;