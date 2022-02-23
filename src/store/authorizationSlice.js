import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const addRegister = createAsyncThunk(
    "authorization/addRegister",
    async function (register, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(register)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/", options)

            const data = await response.json();
            console.log(data)

        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const addLogin = createAsyncThunk(
    "authorization/addLogin",
    async function (login, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/create", options)

            const data = await response.json();
            dispatch(addToken(data));
            localStorage.setItem("token", JSON.stringify(data));

        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const tokenAdd = createAsyncThunk(
    "authorization/addLogin",
    async function (token, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access}`
                }
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/catalog/order/create/", options)

            const data = await response.json();
            dispatch(loginRed(data));
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const authorizationSlice = createSlice({
    name: "authorization",
    initialState: {
      register: {
          name: "",
          email: "",
          phone_number: "",
          password: ""
      },
        login: {
            phone_number: "",
            password: ""
        },
        token: {
            access: "",
            refresh: ""
        },
        loginAuth: null
    },
    reducers: {
        registerChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.register[keys[0]] = text;
        },
        loginChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.login[keys[0]] = text
        },
        addToken(state, action){
            state.token.access = action.payload.access;
            state.token.refresh = action.payload.refresh;
        },
        exitLogin(state){
            state.loginAuth = null;
            localStorage.clear()
        },
        loginRed(state, action){
            state.loginAuth = action.payload
        }
    }
})

export const {registerChange, loginChange, addToken, exitLogin, loginRed} = authorizationSlice.actions

export default authorizationSlice.reducer;