import { combineReducers } from 'redux';
import App from '~/pages/redux/reducers/index';

const rootReducers = combineReducers({
  app: App
});

export default rootReducers;
