'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';

const Task = ( {task, deleteTrigger} ) => {
  return(
    <div className='flex flex-row justify-center items-center w-72 h-auto rounded-xl border-2 border-neutral-900 border-solid py-2 gap-10 shadow-md'>
      <input className='text-lg w-full max-w-32 focus:outline-none border-0 p-1' type="text" placeholder="Task Name"/>
      <input className='size-6 cursor-pointer accent-slate-900' type='checkbox'/>
      <button onClick={deleteTrigger}><FontAwesomeIcon className='cursor-pointer' icon={faX} size="xl" style={{color: "#e11414",}}/></button>
    </div>
  );
};

export default Task;