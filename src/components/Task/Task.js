import React from 'react';

import './Task.css'
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, deleteTask} from "../../store";

const Task = ({task}) => {
    const {taskName,status,id}=task;

    const dispatch = useDispatch();

    return (
        <div className={'task'}>
            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
            <h2 className={status? 'text':''}>{taskName}</h2>
            <button onClick={()=>dispatch(deleteTask({id}))}>Delete</button>
        </div>
    );
};

export {Task};