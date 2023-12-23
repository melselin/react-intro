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
      {/* Task için giriş inputu */}
      <input
        type="text"
        value={task}
        onChange={(onTask) => setTask(onTask.target.value)}
        placeholder="Yeni görev ekle"
      />
      {/* Task ekleme butonu */}
      <button onClick={addTask}>Ekle</button>
      {/* Task listesi */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
