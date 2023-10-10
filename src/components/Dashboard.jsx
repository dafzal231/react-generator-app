import React from "react";
import "../styles/globals.css";
import { useSelector, useDispatch } from 'react-redux'
import SelectInput from "./reusable/SelectInput";
import RadioInput from "./reusable/RadioInput";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <SelectInput></SelectInput>

            <RadioInput options={['middle', 'large', 'small']} type='buttonSize'/>

            <RadioInput options={['default', 'circle', 'round']} type='buttonShape'/>

            <RadioInput options={['default', 'dashed', 'link', 'text', 'primary']} type='buttonType'/>

        </div>
    )
}

export default Dashboard