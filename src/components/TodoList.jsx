import { TodoInput } from "./TodoInput";
import { useAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoList] = useAtom(todoListAtom);

  // 完了済みタスクのカウント関数
  const CompletedTodo = todoList.reduce((count, todo) => {
    return todo.isCompleted ? count + 1 : count;
  }, 0);

  console.log("TodoList Rendering");

  return (
    <div className="m-auto">
      <div>
        <span>すべてのタスク: {todoList.length}</span>
        <span>完了済み: {CompletedTodo}</span>
        <span>未完了: {todoList.length - CompletedTodo}</span>
      </div>
      <TodoInput />
      <div>
        <ul className="list-none">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
