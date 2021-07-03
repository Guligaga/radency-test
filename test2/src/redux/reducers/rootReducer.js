import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';

import generalsReducer from "./generalsReducer";
import notesReducer from "./notesReducer";
import summaryReducer from "./summaryReducer";


const rootReducer = combineReducers({
    notes: notesReducer,
    summary: summaryReducer,
    generals: generalsReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));