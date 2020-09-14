import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            placeholder="Add Todo"
          ></input>
          <input
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    );
  }
}

export default AddTodo;
