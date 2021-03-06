import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={this.props.delTodo}
        toggleCompleted={this.props.toggleCompleted}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
