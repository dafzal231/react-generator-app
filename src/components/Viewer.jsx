import React from "react";
import "../styles/globals.css";
import computer from '../images/computer.png';
import phone from '../images/phone.png';
import ipad from '../images/ipad.png';
import code from '../images/preview.png';
import sizing from '../images/sizing.png';

const Viewer = () => {

    return (
        <div className="viewer">
            <div>
                <div className = "images-1">
                <div className = "img"> 
                <img class="img" src={computer} alt="Icon"/>
                </div>
                <div className = "img" > 
                <img class="img" src={phone} alt="Icon"/>
                </div>

                <div className = "img"> 
                <img class="img" src={ipad} alt="Icon"/>
                </div>
            </div>

        { /*  Will need to make this a number form 
        ( if the user wants to change it
            */}
            
            <div class = "images-2">
            <div className = "img"> 
                <img class="img" src={sizing} alt="Icon"/>
                </div> 

                <div className = "img">
                <img class="img" src={code} alt="Icon"/>
                </div> 
            </div>
        </div>
      </div>

    )
}

export default Viewer