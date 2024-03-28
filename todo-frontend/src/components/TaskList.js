// TaskList.js
import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskStatus }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleToggleStatus = (taskId) => {
    toggleTaskStatus(taskId);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="container">
      <h2 className="Headings">Task List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} onClick={() => handleTaskClick(task)}>
              <td>{task.title}</td>
              <td>{task.completed ? "Completed" : "Pending"}</td>
              <td>{task.priority}</td>
              <td>
                <DropdownButton id="dropdown-basic-button" title="Actions">
                  <Dropdown.Item onClick={() => editTask(task)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteTask(task._id)}>Delete</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleToggleStatus(task._id)}>
                    {task.completed ? "Mark as Pending" : "Mark as Complete"}
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTask && (
        <div className="task-description">
          <h4>Description</h4>
          <p>{selectedTask.description}</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
