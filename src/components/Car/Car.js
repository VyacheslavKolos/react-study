import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Car.css'
import {carToUpdate, deleteCarThunk} from "../../store";
import {FormForUpdate} from "../FormForUpdate/FormForUpdate";


const Car = ({car}) => {
    const {model, price, year, id} = car;
    const dispatch = useDispatch();

    const [updatedCar, setUpdatedCar] = useState(false);

    const carToUpd = () => {
        setUpdatedCar(car)
        dispatch(carToUpdate({car}))
    }


    return (
        <div className={"car"}>
            <div className={"carInfo"}>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
                <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete Car</button>
                <button onClick={() => carToUpd()}>updateCar</button>
                <hr/>
            </div>
            {updatedCar && <FormForUpdate car={car} />}


        </div>
    );
};

export {Car};