import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const todoDeleteHandle = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <>
      <NewTodo addTodos={todoAddHandler} />
      <ToDoList items={todos} onDelete={todoDeleteHandle} />
    </>
  );
};

export default App;
