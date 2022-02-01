import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarThunk} from "../../store";

const Car = ({car}) => {
    const {model,price,year,id}=car
    const dispatch=useDispatch();
    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;