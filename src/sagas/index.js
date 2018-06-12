import { takeLatest, put, call } from 'redux-saga/effects';
import { GOT_MESSAGES, GET_MESSAGES, GOT_NO_MESSAGES } from '../actions';
import api from '../api';

// function* getStuff() {
//   console.log("Stuff");
//   try {
//     const data = yield call(api.getStuff);
//     yield put({ type: actions.GOT_STUFF, data });
//   } catch (error) {
//     console.log("saga fail: ", error);
//     yield put({ type: actions.GOT_NO_STUFF, error });
//   }
// }

function* fetchMessage(message) {
  console.log('Sagas', message);
  try {
    yield put({ type: GOT_MESSAGES, message });
  } catch (error) {
    console.log('saga fail: ', error);
    yield put({ type: GOT_NO_MESSAGES, error });
  }
}
export function* sagas() {
  yield takeLatest(GET_MESSAGES, fetchMessage);
}
