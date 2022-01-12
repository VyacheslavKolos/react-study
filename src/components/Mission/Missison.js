import React from 'react';

import Missiom from "./Mission.css";

const Missison = (props) => {
    const {name, year, img} = props;
    console.log(img);
    return (
        <div className={"wrap"}>
            <div className={"text"}>
                <h4>{name}</h4>
                <h5>{year}</h5>
            </div>
            <div className="img">
                <img src={img} alt="picture"/>
            </div>
        </div>
    );
};

export default Missison;