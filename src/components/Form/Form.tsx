import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {createCarThunk} from "../../store";

const Form: FC = () => {
    const {handleSubmit, register, reset, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(createCarThunk({car}))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>model: <input type="text" placeholder={"model"} {...register("model")}/></label>
                <label>price: <input type="number" placeholder={"price"} {...register("price", {valueAsNumber: true})}/></label>
                <label>year: <input type="number"
                                    placeholder={"year"} {...register("year", {valueAsNumber: true})}/></label>
                <button>create</button>
                <hr/>
            </form>
        </div>
    );
};

export {Form};


