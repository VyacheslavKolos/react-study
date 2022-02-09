import React, {FC} from 'react';
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {deleteCarThunk} from "../../store";

const Car: FC<{ car: ICar }> = ({car}) => {
    const {id, price, year, model} = car
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};