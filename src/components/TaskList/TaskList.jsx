import React from "react";
import "../App.css";
const TaskList = ({ tasks, onChange, setFilter }) => {
  return (
    <div>
      <h2>TaskList</h2>
      <ul className="wrap">
        {tasks.map((item) => (
          <li key={item.id}>
            {" "}
            {item.title}
            <p>
              Стан виконання: {item.completed ? "Виконано" : "Не виконано"}{" "}
            </p>
            <button onClick={() => onChange(item.id)}>
              {item.completed ? "Виконано" : "Не виконано"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setFilter("all")} className="btn">
        All
      </button>
      <button onClick={() => setFilter("active")} className="btn2">
        Active
      </button>
      <button onClick={() => setFilter("completed")} className="btn3">
        Completed
      </button>
    </div>
  );
};

export default TaskList;
