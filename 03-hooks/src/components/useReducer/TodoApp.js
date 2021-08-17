import React, { useReducer, useEffect } from "react";
import todoReducer from "./todoReducer";

import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handlePending = (todoId) => {
    dispatch({
      type: "pending",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handlePending={handlePending}
          />
        </div>
        <div className="col-md-5">
      <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
