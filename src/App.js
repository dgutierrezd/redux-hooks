import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import List from "./components/List";
import AddTodo from "./components/AddTodo";


function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <List />      
        <br />  
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
