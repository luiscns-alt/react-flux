import React, { Component } from "react";
import "./App.css";
import Newtodoitem from "./view/components/NewToDoItem";
import ToDoList from "./view/components/ToDoList";
import TodoActions from "./data/actions/TodoActions";
import TodoStore from "./data/store/TodoStore";

async function getTodoState() {
  return {
    todoList: await TodoStore.getAll(),
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this._onChange = this._onChange.bind(this);
    this._onChange();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillMount() {
    TodoStore.removerChangeListener(this._onChange);
  }

  async _onChange() {
    this.setState(await getTodoState());
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <Newtodoitem onAdd={TodoActions.create} />
        <hr />
        <button className="tw-btn" onClick={TodoActions.clear}>
          Limpar
        </button>
        <hr />
        <ToDoList
          items={state.todoList}
          onRemove={TodoActions.remove}
          onUpdate={TodoActions.update}
        />
      </div>
    );
  }
}

export default App;
