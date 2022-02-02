import React from 'react';
import {useDispatch} from "react-redux";
import {carToUpdate} from "../../store";

const Car = ({car}) => {
    const {model, price, year}=car;
    const dispatch = useDispatch();


    return (
        <div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carToUpdate({car}))}>Update</button>
            <hr/>
        </div>
    );
};

export {Car};