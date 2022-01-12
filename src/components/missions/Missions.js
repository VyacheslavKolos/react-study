import React, {useEffect, useState} from 'react';

import Missison from "../Mission/Missison";

const Missions = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setMissions(value.filter(obj => obj.launch_year !== "2020"));
            })
        , []);

    return (
        <div>
            {
                missions.map(mission => <Missison key={mission.flight_number} name={mission.mission_name}
                                                  year={mission.launch_year} img={mission.links.mission_patch_small}/>)
            }
        </div>
    );
};

export default Missions;