import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons

function TodoList({ todos, removeTodo, toggleComplete, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          {/* Click on text to toggle complete */}
          <span
            onClick={() => toggleComplete(index)}
            className={todo.completed ? "todo-text completed" : "todo-text"}
          >
            {todo.text}
          </span>

          {/* Buttons with icons */}
          <div className="buttons">
            <FaEdit
              className="icon edit-icon"
              onClick={() => editTodo(index)}
              title="Edit Todo"
            />
            <FaTrash
              className="icon delete-icon"
              onClick={() => removeTodo(index)}
              title="Delete Todo"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
