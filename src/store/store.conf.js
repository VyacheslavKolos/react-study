import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./Car.slice";

const store=configureStore({
    reducer:{
        carReducer
    }
})

export default store;