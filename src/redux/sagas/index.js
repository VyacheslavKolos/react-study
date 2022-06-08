import {takeEvery, put, call, fork, spawn, join, select} from 'redux-saga/effects';

async function swapiGet(pattern) {
    return await fetch(`https://swapi.dev/api/${pattern}`)
        .then(value => value.json())
        .then(value => {
            return value;
        });
}

export function* load_people() {
    const people = yield call(swapiGet, 'people');
    yield put({type: 'SET_PEOPLE', payload: people.results});

    return people;
}

export function* load_planets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
}


export function* workerSaga() {
    yield call(load_people);
    yield spawn(load_planets);

    const store = yield select(s => s);
    console.log(store);
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga);
}
