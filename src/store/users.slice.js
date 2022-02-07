import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../service";

const initialState = {
    users: [],
    errors: null,
    status: null
}

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.errors = null
            state.status = 'pending'
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.errors = action.payload
        }
    }

})

const userReducer = userSlice.reducer;
export default userReducer;

