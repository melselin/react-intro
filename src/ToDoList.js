import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Input*/}
      <input
        type="text"
        value={task}
        onChange={(onTask) => setTask(onTask.target.value)}
        placeholder="Add a new task!"
      />
      {/* Button for text adding */}
      <button onClick={addTask}>Ekle</button>
      {/* Task list */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
