import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.appContainer}>
        <h1 style={styles.appTitle}>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

// Styles
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Full viewport height
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #f6d365)", // Gradient background
    backgroundSize: "400% 400%", // For animation
    animation: "gradientAnimation 15s ease infinite", // Gradient animation
  },
  appContainer: {
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    width: "100%",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  appTitle: {
    textAlign: "center",
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
};

// Add gradient animation to global styles
const globalStyles = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Inject global styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default App;