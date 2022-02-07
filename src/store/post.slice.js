import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../service";

const initialState = {
    posts: [],
    status: null,
    errors: null
}

export const getAllPost = createAsyncThunk(
    'postSlice/getAllPost',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const postSlice = createSlice(
    {
        name: 'postSlice',
        initialState,
        reducers: {},
        extraReducers: {
            [getAllPost.pending]: (state) => {
                state.errors = null
                state.status = 'pending'
            },
            [getAllPost.rejected]: (state, action) => {
                state.status = 'rejected'
                state.errors = action.payload
            },
            [getAllPost.fulfilled]: (state, action) => {
                state.posts = action.payload
            }
        }
    }
)

const postReducer = postSlice.reducer;
export default postReducer;