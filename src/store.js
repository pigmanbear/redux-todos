import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/message'

const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer
})


export default createStore(
    reducer, 
    compose(applyMiddleware(thunk)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


