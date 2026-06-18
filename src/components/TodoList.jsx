import { useState } from "react";
import { TodoInput } from "./TodoInput";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (content) => {
    const newTodoList = [
      ...todoList,
      { id: crypto.randomUUID(), created_at: Date.now(), content: content },
    ];
    setTodoList(newTodoList);
    console.log(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  console.log("TodoList Rendering");

  return (
    <div className="m-auto">
      <TodoInput addTodo={addTodo} />
      <ul className="list-none">
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button className="border" onClick={() => deleteTodo(todo.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
