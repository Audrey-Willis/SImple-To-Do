import React, { useReducer } from "react";
import { initialState, reducer } from "./components/reducers/index";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm.js";
import "./App.css";
import { AppStyles } from "./components/Styles/AppStyles";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <AppStyles className="App">
      <h1>Simple To Do List</h1>
      <h2>Sometimes you don't need bells and whistles</h2>
      <p>
        Just enter the things you need to get done in our text box. Click on
        your list item when you've completed it to cross it out. At the end of
        the day, press clear to get rid of your old finished items
      </p>
      <div className="fullToDoList">
        <ToDoForm dispatch={dispatch} />
        <ToDoList dispatch={dispatch} state={state} />
      </div>
    </AppStyles>
  );
}

export default App;

