import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import TodoList from "./components/TodoList";

export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const hendlerAdd = (value: string) => {
    const newTodo: ITodo = {
      title: value,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  return (
    <>
      <Header />
      <Content hendlerAdd={hendlerAdd} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
