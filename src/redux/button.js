import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'default',
  danger: false,
  disabled: false,
  ghost: false,
  loading: false,
  shape: 'default',
  size: 'middle',
  icon: null,
}

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    buttonType: (state, action) => {
        state.type = action.payload      
    },
    dangerOn: (state) => {
        state.danger = true
    },
    dangerOff: (state) => {
        state.danger = false
    },
    disabledOn: (state) => {
        state.disabled = true
    },
    disabledOff: (state) => {
        state.disabled = false
    },
    ghostOn: (state) => {
      state.ghost = true
    },
    ghostOff: (state) => {
        state.ghost = false
    },
    loadingOn: (state) => {
      state.loading = true
    },
    loadingOff: (state) => {
      state.loading = false
    },
    buttonShape: (state, action) => {
      state.shape = action.payload
    },
    buttonSize: (state, action) => {
        state.size = action.payload
    },
    setIcon: (state, action) => {
        state.icon = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    buttonType, 
    dangerOn,
    dangerOff, 
    disabledOff,
    disabledOn, 
    ghostOn,
    ghostOff,
    loadingOff,
    loadingOn,
    buttonShape,
    buttonSize,
    setIcon, 
} = buttonSlice.actions

export default buttonSlice.reducer