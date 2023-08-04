import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services/api';
import {
  getRoleSuccess,
  getRoleFailed,
  GET_ROLE_START
} from '../../actions/common';

/**
 * get role api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getRoleApi = (props) => {
  var uri = `/admin/roles`;

  console.log(uri);
  return api.get(uri, props);
};

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doGetRole(action) {
  try {
    const response = yield call(getRoleApi, action?.payload);
    if (response?.status_code === 200) {
      yield put(getRoleSuccess(response?.data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess(response?.data);
      }
    } else {
      throw response?.data?.message;
    }
  } catch (error) {
    yield put(getRoleFailed());
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error);
    }
  }
}

/**
 * [Watcher]
 * Watch get role
 */
export default function* watchGetRole() {
  yield takeLatest(GET_ROLE_START, doGetRole);
}
