import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../service";


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const updateCarById = createAsyncThunk(
    'cars/updateCarById',
    async ({id, car}, {dispatch}) => {
        const newCar = await carService.updateById(id, car)
        dispatch(updateCar({car: newCar}))
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data: newCar, id}, {dispatch}) => {
        try {
            const data = await carService.create(newCar);
            console.log(data);
            dispatch(addCar({data}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'cars/deleteCarById',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCarById({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: null,
        errors: null,
        carForUpdate: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id)
            state.cars[index] = action.payload.car
        },
        deleteCarById: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.errors = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})


const carReducer = carSlice.reducer;
export const {carToUpdate, updateCar, addCar, deleteCarById} = carSlice.actions

export default carReducer;

