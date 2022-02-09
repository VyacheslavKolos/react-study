import React, {FC} from 'react';
import {ICar} from "../../interfaces/pokemon.interface";
interface CarProps{
    car:ICar;
}

const Pokemon:FC<CarProps> = ({car}) => {

    return (
        <div>
            <div>
                <div> id: {car.id}</div>
                <div> model: {car.model}</div>
                <div> price: {car.price}</div>
                <div> year: {car.year}</div>
                <hr/>
            </div>
        </div>
    );
};

export {Pokemon};