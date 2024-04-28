import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { getuploadedFilesReducer, uploadFilesReducer } from './reducers/fileReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';


const reducer=combineReducers({
user:userReducer,
file:getuploadedFilesReducer,
uploadFile:uploadFilesReducer
})

let initialState={}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store