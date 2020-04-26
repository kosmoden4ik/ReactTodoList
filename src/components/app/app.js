import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./app.css";
export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Cofee", important: false, id: 1 },
      { label: "Build App React", important: true, id: 2 },
      { label: "Learn JS", important: true, id: 3 }
    ]
  };
  deletedItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id == id);
      console.log(idx);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      return { todoData: newArray };
    });
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deletedItem} />
      </div>
    );
  }
}
