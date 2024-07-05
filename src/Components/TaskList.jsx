import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, updateTaskStatus, deleteTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
