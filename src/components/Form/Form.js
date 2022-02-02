import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {updateCarById} from "../../store";

const Form = () => {

    const {handleSubmit, reset, register, setValue} = useForm()
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const submit = (data) => {
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
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export {Form};