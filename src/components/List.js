import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction } from "../redux/actions";

function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <React.Fragment>
            <p key={todo.id}>{todo.name}</p>
            <button onClick={() => dispatch(deleteTodoAction(todo.id))}>Delete</button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default List;
