import { takeEvery, select, call, put } from "redux-saga/effects";
import { actions, saveData, request } from "./reducer";
import { reducerType } from "@store/reducers";

function* requestSaga() {
  const listStorage: string | null = localStorage.getItem("list");
  const list = listStorage && JSON.parse(listStorage);
  yield put(actions.setData(list));
}

function* saveDataSaga() {
  try {
    const state: reducerType = yield select();
    const { list } = state.synonymsReducer;
    localStorage.setItem("list", JSON.stringify(list));
  } catch (err) {
    console.error(err);
  } finally {
  }
}

export function* synonymsSaga() {
  yield takeEvery(request, requestSaga);
  yield takeEvery(saveData, saveDataSaga);
}
