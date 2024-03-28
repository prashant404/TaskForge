// TaskForm.js
import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setDueDate(taskToEdit.dueDate ? taskToEdit.dueDate.slice(0, 10) : ""); // Extracting date portion only
      setPriority(taskToEdit.priority || "Medium");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return; // Check if title and description are provided
    if (taskToEdit) {
      updateTask(taskToEdit._id, { title, description, dueDate, priority }); // Send an object with all fields
    } else {
      addTask({ title, description, dueDate, priority }); // Send an object with all fields
    }
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <div className="container">
      <h2 className="Headings">{taskToEdit ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default TaskForm;