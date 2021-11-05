import React, { Component } from "react";

class Todoitem extends Component {
  static defaultProps = {
    item: {},
  };
  render() {
    const { props } = this,
      item = props.item;
    return (
      <li className="todo-list-item">
        <input className="tw-check" type="checkbox" checkbox={item.checked} />
        <input
          className="tw-input"
          type="text"
          disabled={item.checked}
          defaultValue={item.description}
        />
        <button className="tw-btn">X</button>
      </li>
    );
  }
}

export default Todoitem;
