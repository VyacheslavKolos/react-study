import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, errors, status}=useSelector(state => state['cars'])
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};