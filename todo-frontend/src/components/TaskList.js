import React from "react";

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskStatus }) => {
  const handleToggleStatus = (taskId) => {
    toggleTaskStatus(taskId);
  };

  return (
    <div>
      <h2 className="Headings">Task List</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "Not set"}</td>
              <td>{task.priority}</td>
              <td>{task.completed ? "Completed" : "Pending"}</td>
              <td>
                <button onClick={() => editTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
                <button onClick={() => handleToggleStatus(task._id)}>
                  {task.completed ? "Mark as Pending" : "Mark as Complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
