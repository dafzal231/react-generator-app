import React from 'react'
import "./globals.css";

const DropDown = () =>{
    return (
        <div className="dropdown-wapper">
            <input
                id='collapse-1'
                className='toggle'
                type='checkbox'
                defaultChecked=""

            />
            <label htmlFor='collapse-1' className='drop-title'>
                COMPONENTS
            </label>
            <div className="collapisble-content">
                <div className="inner-content"></div>
            </div>
        </div>
    )
}

export default DropDown;
