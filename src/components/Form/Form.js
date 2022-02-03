import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Form.css'
import {addTask} from "../../store";

const Form = () => {

    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        dispatch(addTask({task: e.target.task.value}))
        e.target.reset();
    }

    const {tasks} = useSelector(state => state.task);

    return (
        <div>
            <div className={'formDiv'}>
                <form onSubmit={submit}>
            <h2>All: {tasks.length} Completed: {tasks.filter(task=>task.status).length}</h2>
                    <input type="text" name={"task"}/>
                    <button>Create</button>
                </form>
            </div>
            <hr/>
        </div>
    );
};

export {Form};