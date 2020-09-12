import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: true,
      },
      {
        id: 2,
        title: 'Take a nap',
        completed: false,
      },
      {
        id: 3,
        title: 'Cook dinner',
        completed: true,
      },
    ],
  };

  // Toggle completed
  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todos
  delTodo = (id) => {
    console.log(id);
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
