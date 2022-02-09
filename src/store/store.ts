import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {carApi} from './service'

const rootReducer = combineReducers({
    [carApi.reducerPath]: carApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(carApi.middleware),
    })
}

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']