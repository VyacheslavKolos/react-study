import React, {useState} from 'react';

const Cat = ({cat, dispatch}) => {
    const deleteCat = () => {
        dispatch({type: "deleteCat", animalName: cat.cat})
    }

    return (
        <div>
            {cat.cat}
            <button onClick={deleteCat}>Delete</button>
        </div>


    );
};

export default Cat;