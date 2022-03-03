import {createStore , applyMiddleware , combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"

import {historiqueReducer} from "./historique/historique.reducer";
import {userReducer} from "./user/user.reducer"

const rootReducer = combineReducers({
    historiqueReducer,
    userReducer
})

export const store = createStore(rootReducer , 
    composeWithDevTools(applyMiddleware(thunk))
)