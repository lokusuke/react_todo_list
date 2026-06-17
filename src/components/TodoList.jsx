import { useState } from "react";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addText = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const addTodo = () => {
    const newTodoList = [
      ...todoList,
      { id: crypto.randomUUID(), created_at: Date.now(), content: text },
    ];
    setTodoList(newTodoList);
    // console.log(newTodoList);
  };

  console.log("TodoList Rendering");

  return (
    <div className="m-auto">
      <div className="flex">
        <input className="border" type="text" value={text} onChange={addText} />
        <button className="border" onClick={addTodo}>
          追加
        </button>
      </div>
      <ul className="list-none">
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};
