import React, { Component } from "react";
import "./App.css";
import { TodoService } from "./data/services/TodoService";
import ToDoList from "./view/components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({ todoList });
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <ToDoList items={state.todoList} />
      </div>
    );
  }
}

export default App;
