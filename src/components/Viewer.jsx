import React from "react";
import "../styles/globals.css";
import collaborate from "../images/collaborate.png";
import customize from "../images/customize.png";
import sizing from "../images/sizing.png";
import view_code from "../images/view_code.png";

import { Button, InputNumber } from "antd";
import { AppstoreOutlined, UsergroupAddOutlined, EyeOutlined, UserOutlined, UserAddOutlined, SettingOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux";

const Viewer = () => {

    const { disabled, danger, loading, ghost, size, shape, type } = useSelector((state) => state.button)

    const onChange = (value) => {
        console.log(value);
    };

    return (
        <div className="viewer">

            <div class="dropdown">
                <Button><AppstoreOutlined /></Button>
                <div className="dropdown-menu" >
                    <div className="grid-item">
                        <Button icon={<UsergroupAddOutlined />} style={{borderRadius: '50px'}} >
                            Collaborate
                        </Button>
                    </div>
                    

                    <div className="grid-item">
                        <Button icon={<SettingOutlined />} style={{borderRadius: '50px'}} >
                            Customize
                        </Button>
                    </div>

                    <div className="grid-item">
                        <Button icon={<EyeOutlined />} style={{borderRadius: '50px'}} >
                            View Code
                        </Button>
                    </div>

                    <div className="grid-item">
                        <InputNumber
                            defaultValue={100}
                            style={{width: '100%'}}
                            min={0}
                            max={100}
                            formatter={(value) => `${value*10}PX / ${value}%`}
                            parser={(value) => { 
                                if(value) {
                                    value.replace('%', '')
                                }}}
                            onChange={onChange}
                        />
                    </div>
                </div> 
            </div>

            <div>
                <Button disabled={disabled} danger={danger} loading={loading} ghost={ghost} size={size} shape={shape}>Click Me</Button>

            </div>
        </div>
    )
}

export default Viewer