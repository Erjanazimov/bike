import {configureStore} from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice";
import authorizationReducer from "./authorizationSlice";

export default configureStore({
    reducer:{
        byBike: bikeReducer,
        authorization: authorizationReducer
    }
})