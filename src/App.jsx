import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;