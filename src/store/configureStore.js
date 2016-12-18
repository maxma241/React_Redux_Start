import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

const rootReducers = combineReducers({
    counterReducer
});

export default createStore(rootReducers,window.devToolsExtension ? window.devToolsExtension() : undefined);