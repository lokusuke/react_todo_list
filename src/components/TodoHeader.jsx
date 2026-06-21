import { useAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";

export const TodoHeader = () => {
  const [todoList] = useAtom(todoListAtom);

  // 完了済みタスクのカウント関数
  const CompletedTodo = todoList.reduce((count, todo) => {
    return todo.isCompleted ? count + 1 : count;
  }, 0);

  return (
    <div>
      <div className="flex justify-center mx-auto my-10 font-extrabold text-2xl text-shadow-lg border-b-2 border-gray-200 pb-5">
        <h1>React ToDo管理アプリ</h1>
      </div>
      <div className="flex justify-center items-center gap-10 mx-auto my-10 font-bold">
        <span className="bg-gray-200 rounded-lg p-2 shadow-md">
          タスク {todoList.length}
        </span>
        <span className="bg-green-200 rounded-lg p-2 shadow-md">
          &#x2705;完了 {CompletedTodo}
        </span>
        <span className="bg-yellow-200 rounded-lg p-2 shadow-md">
          &#x274c;未完了 {todoList.length - CompletedTodo}
        </span>
      </div>
    </div>
  );
};
