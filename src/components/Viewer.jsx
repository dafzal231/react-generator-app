import React from "react";
import "../styles/globals.css";
import collaborate from "../images/collaborate.png";
import customize from "../images/customize.png";
import preview from "../images/preview.png";
import sizing from "../images/sizing.png";
import view_code from "../images/view_code.png";

import { Button } from "antd";
import { useSelector } from "react-redux";

const Viewer = () => {

    const { disabled, danger, loading, ghost, size, shape } = useSelector((state) => state.button)

    console.log(size)

    return (
        <div className="viewer">
            <div>
                <div className = "img"> 
                <img class = "img" src={collaborate} alt="Icon"/>
                </div>
                <div className = "img" > 
                <img  src={customize} alt="Icon"/>
                </div>

                <div className = "img"> 
                <img  src={preview} alt="Icon"/>
                </div>
            
                <img src={sizing} alt="Icon"/>
                </div> 

                <div className = "img">
                <img  src={view_code} alt="Icon"/>
                </div> 
            <Button disabled={disabled} danger={danger} loading={loading} ghost={ghost} size={size} shape={shape}>Click Me</Button>
        </div>
    )
}

export default Viewer