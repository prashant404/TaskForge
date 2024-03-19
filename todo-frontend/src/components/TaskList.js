// TaskList.js
import React from "react";

const TaskList = ({ tasks, editTask, deleteTask }) => {
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
              <td>
                <button onClick={() => editTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
