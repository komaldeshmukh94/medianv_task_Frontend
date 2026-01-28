import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Track which todo is being edited (index)
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add or update todo
  const addOrUpdateTodo = (todo) => {
    if (editIndex !== null) {
      // Update existing todo
      const updatedTodos = todos.map((t, i) =>
        i === editIndex ? { ...t, text: todo.text } : t,
      );
      setTodos(updatedTodos);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new todo
      setTodos([...todos, todo]);
    }
  };

  // Remove todo
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Toggle completion
  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  // Set todo for editing
  const editTodo = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React TODO List</h1>
      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        editTodo={editIndex !== null ? todos[editIndex] : null}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
