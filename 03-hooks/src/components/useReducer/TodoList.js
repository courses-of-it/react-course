import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleDelete, handlePending }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoItem
	  key={todo.id}
          index={i}
          todo={todo}
          handleDelete={handleDelete}
          handlePending={handlePending}
        />
      ))}
    </ul>
  );
};
