const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span
            className={`task-title ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleComplete(task.id)}
            style={{ cursor: 'pointer' }}
          >
            {task.title}
          </span>
          <div className="button-group">
            <button
              className={`btn ${task.completed ? 'btn-completed' : 'btn-complete'}`}
              onClick={() => toggleComplete(task.id)}
              aria-label={
                task.completed ? 'Mark as incomplete' : 'Mark as complete'
              }
            >
              {task.completed ? '✓' : 'Complete'}
            </button>
            <button
              className="btn btn-delete"
              onClick={() => deleteTask(task.id)}
              aria-label="Delete task"
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
