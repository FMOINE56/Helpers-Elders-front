import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import connexionReducer from './connexion';
import authenticationReducer from './authentication';
import createpostformReducer from './createpostform';
import homepageReducer from './homepage';
import appReducer from './app';
import reviewReducer from './review';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  connexion: connexionReducer,
  authentication: authenticationReducer,
  createpostform: createpostformReducer,
  homepage: homepageReducer,
  app: appReducer,
  review: reviewReducer,
});

export default rootReducer;
