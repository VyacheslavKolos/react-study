import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: "", username: "", email: ""})

    const formHandler = (e) => {
        const eventInfo = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventInfo})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        getFilter(form);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>username: <input type="text" name={'username'} value={form.username}
                                        onChange={formHandler}/></label>
                <label>email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button>Find</button>
            </form>
        </div>
    );
};

export default Form;