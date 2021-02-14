import { takeEvery, put, all } from "redux-saga/effects";
import api from "../../components/modules/api/api";
import { apiActionsCreator, API_ACTIONS } from "../actions/actions";

export function* onApiLoad({ payload, type }) {

    const actionType = type.replace(API_ACTIONS.FETCH_START, "").toLowerCase();

    
    try {
        const response = yield api.fetch(actionType, payload);

        yield put(apiActionsCreator.fetchSuccess(actionType, response));
    } catch (error) {
        yield put(apiActionsCreator.fetchFailure(actionType, error));
    }
}

export function* watchApiLoad() {
    yield takeEvery(
        (action) => action.type.startsWith(API_ACTIONS.FETCH_START),
        onApiLoad
        );
    }
    
export function* apiRootSaga() {
    yield all([
        watchApiLoad()
    ])
}