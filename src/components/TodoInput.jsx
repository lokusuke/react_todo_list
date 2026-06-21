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
      <div className="flex justify-center mx-auto my-5">
        <form onSubmit={onSubmit} className="flex justify-center gap-2">
          <input
            placeholder="タスクを入力してください"
            className="border rounded-lg p-1"
            type="text"
            ref={inputRef}
          />
          <button
            className="border rounded-lg p-1 bg-blue-500 text-white"
            type="submit"
          >
            保存
          </button>
        </form>
      </div>
    </div>
  );
});
