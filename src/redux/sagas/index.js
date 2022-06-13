import {fork, spawn, call, all, delay} from 'redux-saga/effects';


export default function* rootSaga() {

    const sagas = [loadBasicData];

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        });
    });

    yield all(retrySagas);
}

