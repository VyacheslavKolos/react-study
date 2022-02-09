import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface ICarsState {
    cars: ICar[],
    update: ICar | null
}

const initialState: ICarsState = {
    cars: [],
    update: null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        const {data} = await carService.getAll()
        dispatch(setCars({cars: data}))
    }
)

export const createCarThunk = createAsyncThunk<void, { car: ICar }>(
    'carSlice/createCarThunk',
    async ({car}, {dispatch}) => {
        const {data} = await carService.create(car);
        dispatch(addCar({car: data}))
    }
)

export const deleteCarThunk = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        await carService.deleteById(id)
        dispatch(deleteCar({id}))
        const {data} = await carService.getAll()
        dispatch(setCars({cars: data}))
    }
)

export const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: ((state, action: PayloadAction<{ cars: ICar[] }>) => {
            state.cars = action.payload.cars;
        }),
        addCar: ((state, action: PayloadAction<{ car: ICar }>) => {
            state.cars.push(action.payload.car)
        }),
        deleteCar: ((state, action) => {
            state.cars.filter(car => car.id !== action.payload.id)
        })
    }
})

const carReducer = carSlice.reducer;
export default carReducer;

export const {setCars, addCar, deleteCar} = carSlice.actions;

