import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';

import notesReducer from "./notesReducer";


const rootReducer = combineReducers({
    notes: notesReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));