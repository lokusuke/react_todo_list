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
        <form onSubmit={onSubmit}>
          <input
            className="border-indigo-500 border-2"
            ref={inputRef}
            defaultValue={todo.content}
          />
          <span>[{todo.content}]</span>
          <button type="submit">保存</button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => updateCheckBox(todo.id, e.target.checked)}
          />
          <span>{todo.content}</span>
          <button className="border" onClick={() => setIsEditing(true)}>
            編集
          </button>
          <button className="border" onClick={onClickDelete}>
            削除
          </button>
        </>
      )}
    </li>
  );
};
