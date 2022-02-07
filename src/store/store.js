import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./users.slice";
import postReducer from "./post.slice";
import commentReducer from "./comment.slice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        users: userReducer,
        posts: postReducer,
        comments: commentReducer
    }
})

export default store