import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const addText = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
  };

  console.log("TodoInput Rendering");

  return (
    <div>
      <div className="flex">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Add a task"
            className="border"
            type="text"
            value={text}
            onChange={addText}
          />
          <button className="border" type="submit">
            追加
          </button>
        </form>
      </div>
    </div>
  );
};
