import './App.css';
import {useDispatch, useSelector} from 'react-redux';


function App() {

    const store = useSelector(store => store);
    console.log(store);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h3>Redux-saga</h3>

        </div>
    );
}

export default App;
