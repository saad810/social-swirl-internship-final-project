import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
// import CheckBox from "../components/CheckBox";
import "../components/styles/customTodo.css";
import Task from "../components/Task";
const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    console.log("first");
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! 🏝";
    }
    return "Keep it going 💪🏻";
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <section>
      <main>
        <h1>
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2>{getMessage()}</h2>
        <TaskForm onAdd={addTask} />
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              {...task}
              onRename={(newName) => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={(done) => updateTaskDone(index, done)}
            />
          ))
        ) : (
          <p>Nothing to do! 🎉</p>
        )}
      </main>
    </section>
  );
};

export default TodoScreen;
