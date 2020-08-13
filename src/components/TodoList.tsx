import React from "react";
import { TodoListProps } from "./interfaces";

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleHandler,
  removeHandler,
}) => {
  return (
    <ul>
      {todos.map((n) => {
        const classes = ["todo"];
        if (n.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={n.id}>
            <label>
              <input
                type="checkbox"
                checked={n.completed}
                onChange={() => toggleHandler(n.id)}
              />
              <span>{n.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => removeHandler(n.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
