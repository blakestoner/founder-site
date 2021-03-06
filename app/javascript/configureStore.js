import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {
    posts: [],
    contacts: [],
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
}
