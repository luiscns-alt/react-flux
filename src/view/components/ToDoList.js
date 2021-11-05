import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  static defaultProps = { items: {}, onRemove: () => {} };

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.props.onRemove(id);
  }

  render() {
    const { props } = this;
    if (props.items.length === 0) {
      return <div>Sem Items</div>;
    }
    return (
      <ul className="todo-list">
        {props.items.map((item) => (
          <ToDoItem onRemove={this.remove} key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
