import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const hendlerAdd = (value: string) => {
    console.log(value);
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
