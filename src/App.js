import './App.css';
import {useDispatch, useSelector} from 'react-redux';

import {Routes, Route} from 'react-router-dom';

function App() {

    const store = useSelector(store => store);
    console.log(store);
    const dispatch=useDispatch();

    return (
        <div className="App">
            <h3>Redux-saga</h3>
            <button onClick={()=>dispatch({type:'LOAD_DATA'})}>CLICKKKKK</button>

            {/*<Routes>*/}
            {/*</Routes>*/}

        </div>
    );
}

export default App;
