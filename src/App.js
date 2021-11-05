import React, { Component } from "react";
import "./App.css";
import { TodoService } from "./data/services/TodoService";
import Newtodoitem from "./view/components/NewToDoItem";
import ToDoList from "./view/components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({ todoList });
  }

  add(description) {
    TodoService.create({ description, isChecked: false }).then((newItem) => {
      const { todoList } = this.state;
      todoList.push(newItem);
      this.setState({ todoList });
    });
  }

  remove(id) {
    const { todoList } = this.state,
      itemIndex = todoList.findIndex((item) => item.id === id);
    todoList.splice(itemIndex, 1);
    TodoService.remove(id);
    this.setState({ todoList });
  }

  update(newItem) {
    const { todoList } = this.state,
      itemIndex = todoList.findIndex((item) => item.id === newItem.id);
    todoList[itemIndex] = newItem;
    TodoService.update(newItem);
    this.setState({ todoList });
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <Newtodoitem onAdd={this.add} />
        <hr />
        <ToDoList
          items={state.todoList}
          onRemove={this.remove}
          onUpdate={this.update}
        />
      </div>
    );
  }
}

export default App;
