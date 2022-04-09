import { takeEvery, put, call } from "redux-saga/effects"
import {ACTION} from "./ducks"
function *fetchUsers() {
    try {
        const response = yield call(fetch, "https://jsonplaceholder.typicode.com/users");
        const data = yield response.json();
        console.log("data", data);
        if(response.status === 200) {
            yield put(ACTION.getUsersSuccess(data))
        } else {
            yield put(ACTION.getUsersFailure(data))
        }
    }
    catch (error) {
        console.log("error", error);
       yield put(ACTION.getUsersFailure(error))
    }
}

function* userSaga() {
  yield takeEvery(ACTION.getUsersStart.type, fetchUsers)
  
}

export default userSaga