import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}
const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: new Date().getTime(), taskName: action.payload.task, status: false})
        },
        changeStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id)
            task.status = !task.status;
        },
        deleteTask: (state, action) => {
            state.tasks=state.tasks.filter(task => task.id !== action.payload.id)
        }
    }
});

const taskReducer = taskSlice.reducer;
export default taskReducer

export const {addTask, changeStatus,deleteTask} = taskSlice.actions;
