'use client'

import { useState } from 'react';
import Task from './components/Task';

export default function Home() {
  const [createTask, setCreateTask] = useState([]);

  const addTask = () => {
    setCreateTask([...createTask, { id: Date.now(), name: `Task ${createTask.length + 1}` }]);
  };
  
  const deleteTask = (id) => {
    setCreateTask(createTask.filter(task => task.id !== id));
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-6xl m-10'>Todo App</h1>
      <div className='flex flex-col justify-center items-center gap-6'>
        {createTask.map((task) => (
          <Task key={task.id} task={task} deleteTrigger={() => deleteTask(task.id)} />
        ))}
      </div>
      <button className='m-10 bg-slate-900 rounded-lg text-white p-2 transition-transform hover:scale-105 active:scale-100' onClick={addTask}>Create</button>
    </div>
  );
}
