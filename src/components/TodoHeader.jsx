import { useAtomValue } from "jotai";
import { getTodoListAtom, todoListAtom } from "../atoms/todoListAtom";

export const TodoHeader = () => {
  const todoList = useAtomValue(todoListAtom); // Atomの値だけ取得するため、useAtomValue()を利用
  const amountOfTodoItems = useAtomValue(getTodoListAtom);

  // 完了済みタスクのカウント関数
  const completedTodo = todoList.reduce((count, todo) => {
    return todo.isCompleted ? count + 1 : count;
  }, 0);

  return (
    <div>
      <div className="flex justify-center mx-auto my-10 font-extrabold text-2xl text-shadow-lg border-b-2 border-gray-200 pb-5">
        <h1>React ToDo管理アプリ</h1>
      </div>
      <div className="flex justify-center items-center gap-10 mx-auto my-10 font-bold">
        <span className="bg-gray-200 rounded-lg p-2 shadow-md">
          タスク {amountOfTodoItems}
        </span>
        <span className="bg-green-200 rounded-lg p-2 shadow-md">
          &#x2705;完了 {completedTodo}
        </span>
        <span className="bg-yellow-200 rounded-lg p-2 shadow-md">
          &#x274c;未完了 {amountOfTodoItems - completedTodo}
        </span>
      </div>
    </div>
  );
};
