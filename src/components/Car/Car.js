import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car}) => {
    const {model,price,year,id}=car
    const dispatch=useDispatch();
    return (
        <div>
            <div>Model: {car.model}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;