import React, {useState} from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { disabledOn, disabledOff, dangerOn, ghostOn, loadingOn, dangerOff, ghostOff, loadingOff } from "../../redux/button";

const SelectInput = () => {
    const OPTIONS = ['disabled', 'danger', 'ghost', 'loading'];
    const [selectedItems, setSelectedItems] = useState([]);
    
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const dispatch = useDispatch()

    selectedItems.map((item) => {
        if (item === 'disabled') {
            dispatch(disabledOn())
        }
        else if (item === 'danger') {
            dispatch(dangerOn())
        }
        else if (item === 'ghost') {
            dispatch(ghostOn())
        }
        else if (item === 'loading') {
            dispatch(loadingOn())
        }
    })

    filteredOptions.map((item) => {
        if (item === 'disabled') {
            dispatch(disabledOff())
        }
        else if (item === 'danger') {
            dispatch(dangerOff())
        }
        else if (item === 'ghost') {
            dispatch(ghostOff())
        }
        else if (item === 'loading') {
            dispatch(loadingOff())
        }
    })
    

    return (
        <Select
        className="custom-select"
        mode="multiple"
        placeholder="Select Properties for Button"
        value={selectedItems}
        onChange={setSelectedItems}
        style={{
            width: '100%',
            color: "white",
            backgroundColor: "black"
        }}
        options={filteredOptions.map((item) => ({
            value: item,
            label: item,
        }))}
        />
    );
};

export default SelectInput