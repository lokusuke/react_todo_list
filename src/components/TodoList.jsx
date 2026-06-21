import { TodoInput } from "./TodoInput";
import { useAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoList] = useAtom(todoListAtom);

  console.log("TodoList Rendering");

  return (
    <div>
      <TodoInput />
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
