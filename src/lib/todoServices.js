import {encaseP, tryP} from 'fluture'
import {tap} from 'ramda'
import {fromPromise, observe} from 'most'

const url = 'http://localhost:8080/todos'

const futureFetch = encaseP(fetch)

export const getTodos = () => fetch(url).then(x => x.json())

export const createTodo = name => fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
}).then(res => res.json())

export const updateTodo = todo => fetch(url.concat(`/${todo.id}`), {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}).then(res => res.json())

export const destroyTodo = id => tap(() => console.log(id), fetch(url.concat(`/${id}`), {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}))