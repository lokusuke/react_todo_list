import { useEffect, useRef, useState } from "react";

export const TodoItem = ({ todo, updateTodo, updateCheckBox, deleteTodo }) => {
  // Hooks
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  // after mount
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // form
  const onSubmit = (todo, e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    updateTodo(todo.id, inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={(e) => onSubmit(todo, e)}>
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
          <input type="checkbox" onChange={(e) => updateCheckBox(todo.id, e)} />
          <span>{todo.content}</span>
          <button
            className="border"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            編集
          </button>
          <button className="border" onClick={() => deleteTodo(todo.id)}>
            削除
          </button>
        </>
      )}
    </li>
  );
};
