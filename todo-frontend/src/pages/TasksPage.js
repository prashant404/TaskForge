import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import axios from "axios";
import { baseURL } from "../utils/url"; // Import the baseURL constant from urls.js

const TasksPage = ({ history }) => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [sortBy, setSortBy] = useState(""); // Define sortBy state

  useEffect(() => {
    fetchTasks(); // Include fetchTasks in the dependency array
  }, [sortBy]); // Add sortBy to the dependency array

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let sortParam = "";
      if (sortBy === "priorityHigh") {
        sortParam = "-priority";
      } else if (sortBy === "priorityLow") {
        sortParam = "priority";
      } else {
        sortParam = "dateAdded";
      }
      const response = await axios.get(
        `${baseURL}/api/tasks?sortBy=${sortParam}`,
        config
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value); // Update sortBy state when sorting option changes
  };

  const addTask = async (taskData) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${baseURL}/api/tasks`,
        { ...taskData, workspace: "personal" },
        config
      );
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
      await axios.put(`${baseURL}/api/tasks/${taskId}`, taskData, config);
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? { ...task, ...taskData } : task
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleTaskStatus = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const taskToUpdate = tasks.find((task) => task._id === taskId);
      const newStatus = !taskToUpdate.completed;

      const response = await axios.put(
        `${baseURL}/api/tasks/${taskId}/status`,
        { completed: newStatus },
        config
      );

      // Assuming the response contains the updated task with the toggled status
      const updatedTask = response.data;

      // Update the tasks array with the updated task
      const updatedTasks = tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error toggling task status:", error);
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
      await axios.delete(`${baseURL}/api/tasks/${taskId}`, config);
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
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="priorityHigh">Priority High to Low</option>
          <option value="priorityLow">Priority Low to High</option>
          <option value="dateAdded">Date Added</option>
        </select>
        <TaskList
          tasks={tasks}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          taskToEdit={taskToEdit}
        />
      </div>
    </div>
  );
};

export default TasksPage;
