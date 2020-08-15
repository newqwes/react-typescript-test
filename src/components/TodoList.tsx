import React from "react";
interface ITodos {
  todos: any[];
}
const TodoList: React.FC<ITodos> = ({ todos }) => {
  return (
    <ul>
      {todos.map((n) => {
        return (
          <li>
            <label>
              <input type="checkbox" />
              <span>n</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
