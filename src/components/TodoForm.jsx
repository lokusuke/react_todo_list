import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { appendTodoAtom } from "../atoms/todoListAtom";

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const appendTodo = useSetAtom(appendTodoAtom);

  const onSubmit = ({ content }) => {
    // text は {content: 掃除} => { content }で分割代入して文字列を取り出す
    appendTodo(content);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start justify-center gap-2"
    >
      <div className="flex flex-col items-center">
        <input
          placeholder="タスクを入力してください"
          type="text"
          className="border border-gray-200 rounded-lg p-1 shadow-md"
          {...register("content", {
            required: "タスクは必須です",
          })}
        />
        {errors.content && (
          <p className="font-bold text-red-600">{errors.content.message}</p>
        )}
      </div>
      <button
        className="border rounded-lg p-1  bg-blue-500 text-white"
        type="submit"
      >
        {isSubmitting ? "保存中..." : "保存"}
      </button>
    </form>
  );
};
