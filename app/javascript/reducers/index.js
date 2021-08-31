import { combineReducers } from "redux";

import { postsReducer } from "./posts";
import { contactsReducer } from "./contacts";
import { thingsReducer } from "./things";

const rootReducer = combineReducers({
    posts: postsReducer,
    contacts: contactsReducer,
    things: thingsReducer,
});

export default rootReducer;
