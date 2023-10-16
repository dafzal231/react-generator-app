import { configureStore } from '@reduxjs/toolkit'

import buttonReducer from './button';

export const store = configureStore({
    reducer: {
        button: buttonReducer,
    },
});


