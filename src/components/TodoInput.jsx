import { useAtom } from "jotai";
import { memo, useRef } from "react";
import { appendTodoAtom } from "../atoms/todoListAtom";

export const TodoInput = memo(() => {
  const inputRef = useRef(null);
  const [, appendTodo] = useAtom(appendTodoAtom);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) {
      alert("ToDoを入力してください!");
      return;
    }
    appendTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  console.log("TodoInput Rendering");

  return (
    <div>
      <div className="flex">
        <form onSubmit={onSubmit}>
          <input
            placeholder="タスクを入力してください"
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
});
