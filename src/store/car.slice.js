import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../service";


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectedWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const updateCarById = createAsyncThunk(
    'cars/updateCarById',
    async ({id,car},{dispatch}) => {
        const newCar=await carService.updateById(id,car)
        dispatch(updateCar({car:newCar}))
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
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state, acion) => {
            const index = state.cars.findIndex(car => car.id === acion.payload.car.id)
            console.log(index);
            state.cars[index] = acion.payload.car
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
export const {carToUpdate,updateCar} = carSlice.actions

export default carReducer;

