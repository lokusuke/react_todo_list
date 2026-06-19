import { useRef } from "react";

export const TodoInput = ({ addTodo }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  console.log("TodoInput Rendering");

  return (
    <div>
      <div className="flex">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Add a new task"
            className="border"
            type="text"
            ref={inputRef}
          />
          <button className="border" type="submit">
            保存
          </button>
        </form>
      </div>
    </div>
  );
};
