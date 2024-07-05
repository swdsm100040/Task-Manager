import React from 'react';

const TaskItem = ({ task, updateTaskStatus, deleteTask }) => {
  const { _id, title, description, status } = task;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <select
        value={status}
        onChange={(e) => updateTaskStatus(_id, e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => deleteTask(_id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
