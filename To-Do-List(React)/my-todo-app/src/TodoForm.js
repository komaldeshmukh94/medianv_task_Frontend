import React, { useState, useEffect } from "react";

function TodoForm({ addOrUpdateTodo, editTodo }) {
  const [input, setInput] = useState("");

  // Update input field when editing a todo
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addOrUpdateTodo({
      text: input,
      completed: editTodo ? editTodo.completed : false,
    });
    setInput(""); // Clear input
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
