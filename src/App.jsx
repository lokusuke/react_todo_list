import "./App.css";
import { TodoHeader } from "./components/TodoHeader";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
