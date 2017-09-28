import {getTodos, createTodo, updateTodo, destroyTodo} from '../lib/todoServices'
import {compose, tap} from 'ramda'
import {showMessage} from './message'

const initState = {
    todos: [],
    currentTodo: ''

}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_ADD = 'TODO_ADD'
const LOAD_TODOS = 'LOAD_TODOS'
export const TODO_REPLACE = 'TODO_REPLACE'
const TODO_DELETE = 'TODO_DELETE'

const changeTodo = (func, id) => func()
    .todo
    .todos
    .find(t => t.id === id)

export const updateCurrent = val => ({type: CURRENT_UPDATE, payload: val})
export const loadTodos = todos => ({type: LOAD_TODOS, payload: todos})
export const removeTodo = id => ({type: TODO_DELETE, payload: id})
export const fetchTodos = () => dispatch => getTodos().then(todos => dispatch(loadTodos(todos)))
export const addTodo = todo => ({type: TODO_ADD, payload: todo})
export const replaceTodo = todo => ({type: TODO_REPLACE, payload: todo})
export const saveTodo = name => dispatch => tap(_ => compose(dispatch, showMessage)('Saving Message'), createTodo(name).then(res => compose(dispatch, addTodo)(res)))
export const toggleTodo = id => (dispatch, getState) => tap(_ => compose(dispatch, showMessage)('Updating Todo'), updateTodo({
    ...changeTodo(getState, id),
    isComplete: !changeTodo(getState, id).isComplete
}).then(res => compose(dispatch, replaceTodo)(res)))

export const deleteTodo = id => dispatch => destroyTodo(id).then(_ => compose(dispatch, removeTodo)(id))

export default(state = initState, action) => {

    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                currentTodo: '',
                todos: state
                    .todos
                    .concat(action.payload)
            }
        case CURRENT_UPDATE:
            return {
                ...state,
                currentTodo: action.payload
            }
        case LOAD_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case TODO_REPLACE:
            return {
                ...this.state,
                todos: state
                    .todos
                    .map(t => t.id === action.payload.id
                        ? action.payload
                        : t)
            }
        case TODO_DELETE:
            return {
                ...state,
                todos: state
                    .todos
                    .filter(t => t.id !== action.payload)
            }
        default:
            return state
    }

}