import { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task.trim());
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
      />
      <button type="submit" disabled={!task.trim()}>
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
