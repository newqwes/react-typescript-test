import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../components/interfaces";

export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...todos]);
  };
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          return {
            ...n,
            completed: !n.completed,
          };
        }
        return n;
      })
    );
  };
  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoForm addHandler={addHandler} />
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        removeHandler={removeHandler}
      />
    </>
  );
};
