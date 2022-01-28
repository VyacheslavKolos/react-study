import React, {useState} from 'react';

const Dog = ({dog}) => {


    return (
        <div>
            {dog.dog}
            <button>Delete</button>
        </div>
    );
};

export default Dog;