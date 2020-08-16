import React from "react";
import { ITodo } from "../App";
interface ITodos {
  todos: ITodo[];
}
const TodoList: React.FC<ITodos> = ({ todos }) => {
  return (
    <ul>
      {todos.map((n) => {
        return (
          <li key={n.id}>
            <label>
              <input type="checkbox" />
              <span>{n.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
