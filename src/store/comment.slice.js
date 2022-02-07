import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../service";

const initialState = {
    comments: [],
    status: null,
    errors: null
}

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const commentSlice = createSlice({
        name: 'commentSlice',
        initialState,
        reducers: {},
        extraReducers: {
            [getAllComments.pending]: (state) => {
                state.status = 'pending'
                state.errors = null
            },
            [getAllComments.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.comments = action.payload
            },
            [getAllComments.rejected]: (state, action) => {
                state.status = 'rejected'
                state.errors = action.payload
            }
        }
    }
)

const commentReducer = commentSlice.reducer
export default commentReducer