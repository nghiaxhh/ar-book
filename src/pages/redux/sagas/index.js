import { all } from 'redux-saga/effects';

//Common
import watchGetRole from './common-management/get-role';

/**
 * Root saga
 */
export default function* sagas() {
  yield all([
    //Common
    watchGetRole()
  ]);
}
