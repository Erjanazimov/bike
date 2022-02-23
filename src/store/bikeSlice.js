import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchBike = createAsyncThunk(
    "bike/fetchBike",
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch("https://bikepark-api.herokuapp.com/catalog/list/");
            if (!response.ok){
                throw new Error("Что то пошло не так")
            }
            const data = await response.json();
            return data
        } catch (error){
            return rejectWithValue(error.message)
        }
    })

export const fetchBikeInfo = createAsyncThunk(
    "bike/fetchBikeInfo",
    async function(id, {rejectWithValue}){
        try{
            const response = await fetch(`https://bikepark-api.herokuapp.com/catalog/list/${id}/`);
            if (!response.ok){
                throw new Error("Что то пошло не так")
            }
            const data = await response.json();
            return data
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = "reject";
    state.error = action.payload;
}

const bikeSlice = createSlice({
    name: "bike",
    initialState:{
        bike: [],
        bikeInfo: {
            info: undefined,
            images: undefined
        },
        status: null,
        error: null
    },

    reducers:{

    },
    extraReducers: {
        [fetchBike.pending]:(state) => {
            state.status = "loading"
        },
        [fetchBike.fulfilled]:(state, action) => {
            state.status = null
            state.bike = action.payload
        },
        [fetchBike.rejected]:setError,

        [fetchBikeInfo.pending]:(state) => {
            state.status = "loading"
        },
        [fetchBikeInfo.fulfilled]:(state, action) => {
            state.status = null
            state.bikeInfo.info = action.payload

            state.bikeInfo.images = action.payload.images.map(img => {
                return {
                    original: img,
                    thumbnail: img
                }
            })
        },
        [fetchBikeInfo.rejected]:setError,

    }
})

export default bikeSlice.reducer;