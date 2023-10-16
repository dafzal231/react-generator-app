import React from "react";
import "../styles/globals.css";
import collaborate from "../images/collaborate.png";
import customize from "../images/customize.png";
import sizing from "../images/sizing.png";
import view_code from "../images/view_code.png";

import { Button, InputNumber } from "antd";
import { AppstoreOutlined, UsergroupAddOutlined, EyeOutlined, UserOutlined, UserAddOutlined, SettingOutlined } from "@ant-design/icons"
import {  useSelector } from "react-redux";
import { useState } from "react";
import Modal from 'react-modal';

const CodeModal = ({ isOpen, onClose, code }) => {
    return (
        <Modal
        isOpen = {isOpen}
        onRequestClose = {onClose}
        contentLabel = "View Code"
        className = "custom-modal"
        >

        <h2 className = "generate-code-text"> Generated Code </h2>
        <code>{code}</code>

        <button className = "close-button" onClick = {onClose}>Ok</button>
        </Modal>
    )
};

const CodeOutput = ({ label, styles , updateCode }) => {
    const buttonCode = `${JSON.stringify(styles)}`; 
    console.log(buttonCode);
    updateCode(buttonCode);
    return null;
}

const Viewer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buttonCode, setButtonCode] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };
    
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const userStyles = {
        height: '100px',
        width: '200px',
        backgroundColor: '#c62368',
        border: '1px solid #ffffff',
        borderRadius: '0',
        textAlign: 'center',
        color: '#000000',
        fontSize: '20px',
        fontWeight: '400',
      };

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
                        <Button icon={<EyeOutlined  />} style={{borderRadius: '50px'}}  onClick = {openModal}>  
                            View Code
                        </Button>
                        <CodeModal isOpen = {modalIsOpen} onClose={closeModal}  code = {buttonCode}/>
                        <CodeOutput styles = { userStyles } updateCode = {setButtonCode} ></CodeOutput>
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
                <Button 
                    disabled={disabled} 
                    danger={danger} 
                    loading={loading} 
                    ghost={ghost} 
                    size={size} 
                    shape={shape} 
                    >
                        Click Me
                </Button>
            </div>
        </div>
    )
}


export default Viewer