import React, { useState } from "react";
interface ITodoProps {
  hendlerAdd(value: string): void;
}

const Content: React.FC<ITodoProps> = ({ hendlerAdd }) => {
  const [value, setValue] = useState<string>("");
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const submitInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      hendlerAdd(value);
      setValue("");
    }
  };
  return (
    <>
      <div className="input__container">
        <input
          value={value}
          onChange={inputChange}
          onKeyPress={submitInput}
          type="text"
        />
      </div>
    </>
  );
};

export default Content;
