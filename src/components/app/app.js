import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./app.css";
const App = () => {
  const todoData = [
    { label: "Drink Cofee", important: false, id: 1 },
    { label: "Build App React", important: true, id: 2 },
    { label: "Learn JS", important: true, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
export default App;
