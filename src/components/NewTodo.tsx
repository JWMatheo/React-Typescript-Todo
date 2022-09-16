import React, { useRef } from "react";
import "./NewTodo.css";
type NewTodoProps = {
  addTodos: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = ref.current!.value;
    console.log(enteredText);
    props.addTodos(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={ref} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
