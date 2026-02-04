import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList/TaskList";
import Counter from "./Counter/Counter";

function App() {
  const initialTasks = [
    { id: 1, title: "Вивчити React", completed: true },
    { id: 2, title: "Зробити домашку", completed: false },
    { id: 3, title: "Пройти уроки", completed: false },
    { id: 4, title: "Випити каву", completed: true },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  function filteredTasks() {
    return tasks.filter((item) => {
      if (filter === "active") return !item.completed;
      if (filter === "completed") return item.completed;
      return true;
    });
  }
  function changeCompleted(id) {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <>
      <h1>Filter</h1>
      <TaskList
        setFilter={setFilter}
        onChange={changeCompleted}
        tasks={filteredTasks()}
      />
      ''
      <Counter tasks={filteredTasks()} />
    </>
  );
}

export default App;
