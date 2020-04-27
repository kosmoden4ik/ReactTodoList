import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./app.css";
import ItemAddForm from "../item-add-form/item-add-form";
import { lavenderblush } from "color-name";
export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink cofee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ]
  };
  createTodoItem(label) {
    const newItem = {
      label,
      important: false,
      id: this.maxId++
    };
    return newItem;
  }
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
  addItem = text => {
    const newItem = this.createTodoItem(text);
    //maxId++;
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return { todoData: newArr };
    });
  };
  toggleProperty(arr, id, propName) {
    this.setState(({ todoData }) => {
      const idx = arr.findIndex(el => el.id == id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
      return { todoData: newArray };
    });
  }
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  render() {
    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deletedItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
