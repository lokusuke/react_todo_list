import { useAtomValue } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useAtomValue(todoListAtom);

  console.log("TodoList Rendering");

  return (
    <div>
      <div className="m-auto flex justify-center">
        <ul className="list-none">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
