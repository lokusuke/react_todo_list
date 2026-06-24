import { useState } from "react";
import { useSetAtom } from "jotai";
import {
  deleteTodoAtom,
  updateTodoAtom,
  updateCheckAtom,
} from "../atoms/todoListAtom";
import { useForm } from "react-hook-form";

export const TodoItem = ({ todo }) => {
  // useForm
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // Todo個別にもつHooks
  const [isEditing, setIsEditing] = useState(false);

  // Todoリストの更新関数をAtomから取得
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);
  const updateCheckBox = useSetAtom(updateCheckAtom);

  const onSubmit = ({ content }) => {
    updateTodo(todo.id, content);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex  gap-2 items-center"
        >
          <input
            className="border-indigo-500 border-2"
            defaultValue={todo.content}
            {...register("content", {
              required: "タスクは必須です",
            })}
          />
          <span className="text-gray-500">(現在: {todo.content})</span>
          <button
            type="submit"
            className="rounded-lg p-1 bg-blue-500 text-white shadow-md"
          >
            保存
          </button>
        </form>
      ) : (
        <div className="flex  gap-2 p-2 items-center border-b-2 border-gray-100">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => updateCheckBox(todo.id)}
          />
          <span>{todo.content}</span>
          <button
            className=" bg-gray-400 rounded-lg p-1 text-white shadow-md"
            onClick={() => setIsEditing(true)}
          >
            &#x270f;&#xfe0f;編集
          </button>
          <button
            className=" bg-red-600 text-white rounded-lg p-1 shadow-md"
            onClick={onClickDelete}
          >
            &#x1f5d1;&#xfe0f;削除
          </button>
        </div>
      )}
    </li>
  );
};
