import { useSetAtom } from "jotai";
import { memo, useRef } from "react";
import { appendTodoAtom } from "../atoms/todoListAtom";

export const TodoInput = memo(() => {
  const inputRef = useRef(null);
  const appendTodo = useSetAtom(appendTodoAtom); // appendTodoAtomの関数のみ取得したいので、useSetAtom()を利用

  const onSubmit = (e) => {
    e.preventDefault(); // formの仕様によるリロードを回避

    const trimmedText = inputRef.current.value.trim();

    if (!trimmedText) {
      alert("ToDoを入力してください!");
      return;
    }
    appendTodo(trimmedText);
    inputRef.current.value = "";
  };

  console.log("TodoInput Rendering");

  return (
    <div>
      <div className="flex justify-center mx-auto my-5">
        <form onSubmit={onSubmit} className="flex justify-center gap-2">
          <input
            placeholder="タスクを入力してください"
            className="border border-gray-200 rounded-lg p-1 shadow-md"
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
