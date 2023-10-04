import React from "react";

import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { buttonShape, buttonSize, buttonType } from "../../redux/button";

const RadioInput = ({options, type}) => {

    const dispatch = useDispatch()

    const onChange = (e) => {
        console.log(e.target.value);

        if (type === 'buttonType') {
            dispatch(buttonType(e.target.value))
        }
        else if (type === 'buttonShape') {
            dispatch(buttonShape(e.target.value))
        }
        else if (type === 'buttonSize') {
            dispatch(buttonSize(e.target.value))
        }
    }

    return (
        <Radio.Group buttonStyle="solid" onChange={onChange}>
            {options.map((option) => {
                return (
                    <Radio.Button value={option}>{option}</Radio.Button>
                )
            })}
        </Radio.Group>
    )
}

export default RadioInput