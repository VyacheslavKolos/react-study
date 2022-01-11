import React, {useEffect, useState} from 'react';

const Missions = () => {
    const [missions,setMissions]=useState([]);

    useEffect(()=>  fetch('https://api.spacexdata.com/v3/launches/')
    .then(value => value.json())
    .then(value => {
        setMissions(value);
    })
    ,[]);

    return (
        <div>

        </div>
    );
};

export default Missions;