import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GOT_MESSAGES,
  GET_MESSAGES,
  GOT_NO_MESSAGES,
  CHANGE_AUTH,
  CHANGED_AUTH,
  CHANGE_AUTH_ERROR
} from '../actions';
import api from '../api';

function* fetchMessage(message) {
  try {
    yield put({ type: GOT_MESSAGES, message });
  } catch (error) {
    yield put({ type: GOT_NO_MESSAGES, error });
  }
}

function* changeAuth(logged) {
  try {
    yield put({ type: CHANGED_AUTH, logged });
  } catch (error) {
    yield put({ type: CHANGE_AUTH_ERROR, error });
  }
}
export function* sagas() {
  yield takeLatest(GET_MESSAGES, fetchMessage);
  yield takeLatest(CHANGE_AUTH, changeAuth);
}
