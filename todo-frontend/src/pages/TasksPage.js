import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import axios from "axios";

const TasksPage = ({ history }) => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("https://task-forge-api.vercel.app/api/tasks", config);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const addTask = async (taskData) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post("http://localhost:5000/api/tasks", { ...taskData, workspace: 'personal' }, config);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, taskData, config);
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? { ...task, ...taskData } : task
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, config);
      const filteredTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(filteredTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <Navbar logout={logout} />
      <div>
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        <TaskForm addTask={addTask} updateTask={updateTask} taskToEdit={taskToEdit} />
      </div>
    </div>
  );
};

export default TasksPage;
