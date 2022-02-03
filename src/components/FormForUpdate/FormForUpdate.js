import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import './FormForUpdate.css'
import {useDispatch, useSelector} from "react-redux";
import {carToUpdate, updateCarById} from "../../store";

const FormForUpdate = () => {

    const {handleSubmit, reset, register, setValue} = useForm()
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const submitUpdate = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
    }
    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(submitUpdate)}>
                <div className={"formForUpdate"}>
                    <input type="text" placeholder={'model'} {...register('model')}/>
                    <input type="number" placeholder={'price'} {...register('price')}/>
                    <input type="number" placeholder={'year'} {...register('year')}/>
                    <button >Update Car</button>
                </div>
            </form>
        </div>
    );
};

export {FormForUpdate};