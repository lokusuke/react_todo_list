import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  // タスク追加関数
  const addTodo = (text) => {
    if (!text.trim()) {
      alert("ToDoを入力してください!");
      return;
    }

    const newTodoList = [
      ...todoList,
      {
        id: crypto.randomUUID(), // タスクID
        created_at: Date.now(), // 作成時間
        content: text, // Todoの内容
        // isEditing: false, // 編集中であるか否か -> TodoItemコンポーネントで吸収
        isCompleted: false, // 完了か
      },
    ];
    setTodoList(newTodoList);
  };

  // タスク削除関数
  const deleteTodo = (id) => {
    // ブラウザの確認機能を使用
    if (!confirm("本当によろしいですか？")) {
      return;
    }

    // 削除対象のid以外で新しい配列を再生成
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  // タスク更新関数
  const updateTodo = (id, text) => {
    if (!text.trim()) {
      alert("ToDoを入力してください!");
      return;
    }

    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, content: text } : todo,
    );
    setTodoList(newTodoList);
  };

  // チェックボックス更新関数
  const updateCheckBox = (id, e) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: e.target.checked } : todo,
    );
    setTodoList(newTodoList);
  };

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
      <TodoInput addTodo={addTodo} />
      <div>
        <ul className="list-none">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              updateCheckBox={updateCheckBox}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
