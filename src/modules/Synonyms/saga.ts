import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import { actions, saveData, request } from "./reducer";
import { reducerType } from "@store/reducers";

function* requestSaga() {
  try {
    const listStorage: string | null = localStorage.getItem("list");
    const list = listStorage && JSON.parse(listStorage);
    yield put(actions.setData(list || []));
  } catch (err) {
    console.error(err);
  }
}

function* saveDataSaga() {
  try {
    yield put(actions.setSaving(true));
    yield delay(1000);
    const state: reducerType = yield select();
    const { list } = state.synonymsReducer;
    localStorage.setItem("list", JSON.stringify(list));
  } catch (err) {
    console.error(err);
  } finally {
    yield put(actions.setSaving(false));
  }
}

export function* synonymsSaga() {
  yield takeEvery(request, requestSaga);
  yield takeEvery(saveData, saveDataSaga);
}
