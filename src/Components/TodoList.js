import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo} from '../reducers/todo'
import {asyncReactor} from 'async-reactor'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo }) => (

    <li>
    <span className='delete-item'>
        <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input type="checkbox" checked={isComplete} onChange={() => toggleTodo(id) }/> {name}
    </li>

)


class TodoList extends Component {
    componentDidMount() {
        this
            .props
            .fetchTodos()
    }

    render() {
        return (
            <div className="Todo-List">
                <ul>
                    {this
                        .props
                        .todos
                        .map(x => <TodoItem key={x.id} toggleTodo= {this.props.toggleTodo}  deleteTodo = {this.props.deleteTodo} {...x}/>)}
                </ul>
            </div>
        )
    }
}

export default connect(state => ({
    todos: state.todo.todos
}), {fetchTodos, toggleTodo, deleteTodo})(TodoList)