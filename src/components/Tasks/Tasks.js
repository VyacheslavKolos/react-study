import React from 'react';
import {useSelector} from "react-redux";
import {Task} from "../Task/Task";

const Tasks = () => {
    const {tasks} = useSelector(state => state.task);

    return (
        <div>
            {tasks.map(task=><Task key={task.id} task={task}/>)}
        </div>
    );
};

export {Tasks};