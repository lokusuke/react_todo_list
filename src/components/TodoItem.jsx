import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import {
  deleteTodoAtom,
  updateTodoAtom,
  updateCheckAtom,
} from "../atoms/todoListAtom";

export const TodoItem = ({ todo }) => {
  // Todo個別にもつHooks
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  // Todoリストの更新関数をAtomから取得
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);
  const updateCheckBox = useSetAtom(updateCheckAtom);

  // 編集切り替え時に入力欄にフォーカス
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      alert("ToDoを入力してください!");
      return;
    }
    updateTodo(todo.id, inputRef.current.value);
    setIsEditing(false);
  };

  const onClickDelete = () => {
    if (confirm("本当によろしいですか？")) {
      deleteTodo(todo.id);
    }
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={onSubmit} className="flex  gap-2 items-center">
          <input
            className="border-indigo-500 border-2"
            ref={inputRef}
            defaultValue={todo.content}
          />
          <span>[前の内容: {todo.content}]</span>
          <button
            type="submit"
            className="rounded-lg p-1 bg-blue-500 text-white"
          >
            保存
          </button>
        </form>
      ) : (
        <div className="flex  gap-2 p-2 items-center">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => updateCheckBox(todo.id)}
          />
          <span>{todo.content}</span>
          <button
            className=" bg-gray-400 rounded-lg p-1 text-white"
            onClick={() => setIsEditing(true)}
          >
            &#x270f;&#xfe0f;編集
          </button>
          <button
            className=" bg-red-600 text-white rounded-lg p-1 "
            onClick={onClickDelete}
          >
            &#x1f5d1;&#xfe0f;削除
          </button>
        </div>
      )}
    </li>
  );
};
