import React from 'react';
import {carApi} from "../../store/service";
import {Pokemon} from "../Pokemon/Pokemon";

const Pokemons = () => {

    const {data: cars} = carApi.useFetchAllCarsQuery()
    console.log(cars);
    return (
        <div>
            {cars && cars.map(car => <Pokemon key={car.id} car={car}/>)}
        </div>
    );
};

export {Pokemons};