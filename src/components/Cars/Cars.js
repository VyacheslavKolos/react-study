import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store";
import {Car} from "../Car/Car";
import {Form} from "../Form/Form";
import css from './Cars.module.css'

const Cars = () => {
    const {cars, errors, status} = useSelector(state => state['cars'])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div className={css.carsAndForm}>
            <Form/>
            <div className={css.cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};