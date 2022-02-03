import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../store";

const Form = () => {

    const {handleSubmit, reset, register, setValue} = useForm()

    const dispatch = useDispatch();


    const submitCreate = (data) => {
        dispatch(createCar({data}))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submitCreate)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <button>create</button>
            </form>
        </div>
    );
};

export {Form};