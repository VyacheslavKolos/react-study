import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import { createBrowserHistory } from 'history';
import peopleReducer from './people-reduser/people-reducer';

export const history = createBrowserHistory();

const initial = {
    blog: {}
};

export function appReducer(state = initial, action) {

    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    people:peopleReducer,
    router: connectRouter(history),
})

export default rootReducer;
