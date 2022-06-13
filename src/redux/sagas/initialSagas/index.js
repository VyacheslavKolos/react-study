import {fork, call, all, delay} from 'redux-saga/effects';

function* auth() {
    yield delay(2000);

    console.log('Auth okay');
    return true;
}

function* loadUsers() {
    const request = yield call(fetch, 'https://swapi.dev/api/people');
    const data = yield call([request, request.json]);
    console.log(data);
}

export function* loadBasicData() {
    yield all([fork(auth), fork(loadUsers)]);
}
