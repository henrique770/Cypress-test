/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

const Todo = () => {
  const [task, updateTask] = useState('');
  const [tasks, updateTasks] = useState([]);

  const handleInputChange = (event) => updateTask(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask('');
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <h1>To-Do List Component</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            data-cy='input-task'
            onChange={handleInputChange}
            placeholder='Type a new task here'
            type='text'
            value={task}
          />
          <button data-cy='btn-add' type='submit'>
            Add new task
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr data-cy='table-tasks-row' key={index}>
                {t}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
