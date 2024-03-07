import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskName);
    // setTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Your next task..."
      />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
