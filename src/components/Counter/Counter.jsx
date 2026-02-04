import React from "react";

const Counter = ({ tasks }) => {
  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;
  return (
    <div>
      <h3> Всі задачі {tasks.length}</h3>
      <h3> Виконано {completedCount}</h3>
      <h3> Не виконано {activeCount} </h3>
    </div>
  );
};

export default Counter;
