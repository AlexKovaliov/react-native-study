import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {usersReducer} from './reducers/users-reducer';
import {appReducer} from "./reducers/app-reducer";
import { personReducer } from './reducers/person-reducer';


const rootReducer = combineReducers({
    user: usersReducer,
    app: appReducer,
    person: personReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStateType = ReturnType<typeof rootReducer>


// redux dev-tools
//@ts-ignore
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));*/
