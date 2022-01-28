import React, {useReducer, useState} from 'react';
import {useForm} from "react-hook-form";
import css from "./Forms.module.css"
import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";

const Forms = () => {
    const {register, handleSubmit,reset} = useForm();

    const [dog, setDog] = useState({});

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addDog':
                return {...state, dogs: [...state.dogs, action.name]};
            case 'addCat':
                return {...state, cats: [...state.cats, action.name]};
            case 'deleteCat':
                return {...state, cats: []}

            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    const submitCat = (data) => {
        dispatch({type: "addCat", name: data})
        reset();
    }

    const submitDog = (data) => {
        dispatch({type: "addDog", name: data})
        reset();
    }
    console.log(state.dogs);

    return (
        <div className={css.form}>

            <div className={css.formCat}>
                <form onSubmit={handleSubmit(submitCat)}>Add Cat
                    <input type="text" defaultValue={""} {...register("cat")}/>
                    <button>Save</button>
                </form>
                {
                    state.cats &&
                    state.cats.map(
                        cat =>
                            <Cat key={Math.random()*10000000} cat={cat} />
                        //     <div>
                        //     {cat.cat}
                        // </div>
                    )}
            </div>

            <div className={css.formDog}>
                <form onSubmit={handleSubmit(submitDog)}>Add Dog
                    <input type="text" defaultValue={""} {...register("dog")}/>
                    <button>Save</button>
                </form>
                {
                    state.dogs &&
                    state.dogs.map(
                        dog =>
                            <Dog key={Math.random()*10000000} dog={dog}/>
                    )}
            </div>

        </div>
    );
};

export default Forms;