import React, {useState} from 'react';

const Cat = ({cat}) => {


    return (
        <div>
           {cat.cat}
            <button >Delete</button>
        </div>


    );
};

export default Cat;