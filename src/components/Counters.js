import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1' :
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'null1':
            return {...state, count1: 0}

        case 'inc2' :
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'null2':
            return {...state, count2: 0}

        case 'inc3' :
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'null3':
            return {...state, count3: 0}


    }
return state;
}

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, { count1: 0,count2: 0,count3: 0});


    return (
        <div>
            <div>
                <h2>Counter1</h2>
                <h1>{state.count1}</h1>
                <button onClick={() => dispatch({type: 'inc1'})}>+</button>
                <button onClick={() => dispatch({type: 'dec1'})}>-</button>
                <button onClick={() => dispatch({type: 'null1'})}>0</button>
            </div>
            <hr/>
            <div>
                <h2>Counter2</h2>
                <h1>{state.count2}</h1>
                <button onClick={() => dispatch({type: 'inc2'})}>+</button>
                <button onClick={() => dispatch({type: 'dec2'})}>-</button>
                <button onClick={() => dispatch({type: 'null2'})}>0</button>
            </div>
            <hr/>
            <div>
                <h2>Counter3</h2>
                <h1>{state.count3}</h1>
                <button onClick={() => dispatch({type: 'inc3'})}>+</button>
                <button onClick={() => dispatch({type: 'dec3'})}>-</button>
                <button onClick={() => dispatch({type: 'null3'})}>0</button>
            </div>
        </div>



    );
};

export default Counters;


