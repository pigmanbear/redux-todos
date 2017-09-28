import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Message from './Components/Message'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
        <Message message='Hello From Redux' />
        <TodoForm />
        <TodoList />

        </div>
      </div>
    );
  }
}



export default App