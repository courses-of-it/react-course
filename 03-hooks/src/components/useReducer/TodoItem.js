import React from "react";

export const TodoItem = ({ todo, handleDelete, handlePending, index }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handlePending(todo.id)}
      >
        {index + 1}· {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
