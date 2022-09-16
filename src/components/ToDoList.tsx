import React from "react";
import "./TodoList.css";

// type cannot be re written after but interface can.
interface TodoListProps {
  items: { id: string; text: string }[];
  onDelete: (todoId: string) => void;
}

type TodoListProps2 = {
  items: { id: string; text: string }[];
  onDelete: (todoId: string) => void;
};

const ToDoList: React.FC<TodoListProps2> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
