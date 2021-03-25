import React, { useState } from "react";

const TodoForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const handleChanges = (e) => {
    setNewItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD_ITEM", payload: newItem });
    setNewItem("");
  };
  return (
    <div className="form">
      <h1>To Do</h1>
      <form>
        <input
          className="item-input"
          type="text"
          name="item"
          value={newItem}
          onChange={handleChanges}
          placeholder="Add Item"
        />
        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
