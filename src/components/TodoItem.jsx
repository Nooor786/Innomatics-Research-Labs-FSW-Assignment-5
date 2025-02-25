import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li style={styles.listItem}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={styles.editInput}
        />
      ) : (
        <span
          style={{
            ...styles.taskText,
            ...(todo.completed ? styles.completedTask : styles.activeTask),
          }}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.task}
        </span>
      )}
      <div style={styles.buttonContainer}>
        <button onClick={handleEdit} style={styles.editButton}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
          Delete
        </button>
      </div>
    </li>
  );
};

// Styles
const styles = {
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  taskText: {
    flex: 1,
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  activeTask: {
    color: "#007bff", // Blue color for active tasks
  },
  completedTask: {
    textDecoration: "line-through",
    color: "#888", // Gray color for completed tasks
  },
  editInput: {
    flex: 1,
    padding: "5px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease",
  },
};

export default TodoItem;