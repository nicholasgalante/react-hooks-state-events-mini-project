import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {

  const taskCards = tasks.map(taskObj => {
    return <Task
      key={taskObj.text}
      text={taskObj.text}
      category={taskObj.category}
      onDelete={onDelete}
    />
  })

  return (
    <div className="tasks">
      {taskCards}
    </div>
  );
}

export default TaskList;
