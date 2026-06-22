import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// ToDoリストのデータAtomを定義
// export const todoListAtom = atom([]);

// LocalStorageにToDoリストを保管
export const todoListAtom = atomWithStorage("TODO_LIST", []);

// ToDoリストのデータを新規作成する関数Atomを定義（Write-Only）
export const appendTodoAtom = atom(null, (get, set, text) =>
  set(todoListAtom, (prev) => [
    ...prev,
    {
      id: crypto.randomUUID(), // タスクID
      created_at: Date.now(), // 作成時間
      content: text, // Todoの内容
      isCompleted: false, // 完了済みかどうか
    },
  ]),
);

// ToDoリストのデータを削除する関数Atomを定義（Write-Only）
export const deleteTodoAtom = atom(null, (get, set, id) => {
  // 現在のTodoリストを取得
  const currentTodo = get(todoListAtom);

  // 削除対象のTodoのみを除外
  const filteredTodo = currentTodo.filter((todo) => todo.id !== id);

  // 除外後の新配列をセット
  set(todoListAtom, filteredTodo);
});

// Todoリストのデータを更新する関数Atomを定義（Write-Only）
export const updateTodoAtom = atom(null, (get, set, id, text) => {
  // 現在のTodoリストを取得
  const currentTodo = get(todoListAtom);

  // 削除対象のTodoのみを除外
  const updatedTodo = currentTodo.map((todo) =>
    todo.id === id ? { ...todo, content: text } : todo,
  );

  // 更新後の新配列をセット
  set(todoListAtom, updatedTodo);
});

export const updateCheckAtom = atom(null, (get, set, id) => {
  // 現在のTodoリストを取得
  const currentTodo = get(todoListAtom);

  // 削除対象のTodoのみを除外
  const updatedTodo = currentTodo.map((todo) =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
  );

  // 更新後の新配列をセット
  set(todoListAtom, updatedTodo);
});

// ToDoリストの要素数を読み取る関数Atomを定義（Read-Only）
export const getTodoListAtom = atom((get) => get(todoListAtom).length, null);
