import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  static defaultProps = { items: [] };

  render() {
    const { props } = this;
    if (props.items.length === 0) {
      return <div>Sem Items</div>;
    }
    return (
      <ul className="todo-list">
        {props.items.map((item) => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
