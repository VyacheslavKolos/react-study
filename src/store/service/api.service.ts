import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ICar} from "../../interfaces/pokemon.interface";

// Define a service using a base URL and expected endpoints
export const carApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://91.201.233.14/api/v2' }),
    endpoints: (builder) => ({

        fetchAllCars:builder.query<ICar[],void>({
            query:()=>({
                url:"/cars",

            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints