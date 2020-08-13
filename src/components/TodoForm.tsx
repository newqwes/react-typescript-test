import React, { useState } from "react";
import { TodoFormProps } from "./interfaces";


export const TodoForm: React.FC<TodoFormProps> = ({ addHandler }) => {
  
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addHandler(title)
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
