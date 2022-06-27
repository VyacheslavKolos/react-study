import {call, apply, put, takeEvery} from 'redux-saga';

export function* loadPeopleList({payload}) {
    const {page, search} = payload;
    const request = yield call(fetch, `http https://swapi.dev/api/people?${page}&search=${search}`);
    const data = yield apply(request, request.json);

    yield put({

    })

}

export function* loadPeopleDetails() {

}


export function* peopleSaga() {
    takeEvery('',loadPeopleList)
}
