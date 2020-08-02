import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/actions";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    let newTodo = { id: todos.length, name: todo, complete: false };
    dispatch(addTodoAction(newTodo));
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo()}>Enviar</button>
    </div>
  );
}

export default AddTodo;
