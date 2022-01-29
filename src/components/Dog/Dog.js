import React, {useState} from 'react';

const Dog = ({dog, dispatch}) => {
    const deleteDog = () => {
        dispatch({type: "deleteDog", animalName: dog.dog})
    }

    return (
        <div>
            {dog.dog}
            <button onClick={deleteDog}>Delete</button>
        </div>
    );
};

export default Dog;