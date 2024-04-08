import React, { ChangeEvent, useEffect, useState } from 'react'
import Input from './Input'
import Icons from '../constant/Icon'
import Task from './Task'
import { AddTask, getAllTasks } from '../services/api/taskApi'

const Conatiner:React.FC = ()=> {
    const [text, setText] = useState<string>("");
    const [tasks, setTasks] = useState<any[]>([]); 
    const [inputError, setInputError] = useState<boolean>(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      setText(e.target.value);
      setInputError(false);
    }

    useEffect(() => {
        fetchTasks();
    }, [handleChange])

    const handleAddTask = () => {
        if (text.trim() === "") {
            setInputError(true);
            return;
        }
        AddTask(text);
        setText(""); 
    };

    async function fetchTasks() {
        try {
            const tasksData = await getAllTasks(); 
            setTasks(tasksData);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }
  return (
    <div className='mt-16 w-5/12 bg-LightGray rounded-md flex justify-center'>
        <div className='w-10/12 py-10  '>
        {/* input conatinar */}
        <div className='flex justify-center items-center  gap-2'>
        <div className='w-full '>
        <Input text= {text} onchange = {handleChange} error={inputError}/>
        </div>
    <div className='p-1 bg-main rounded-md' onClick={()=>handleAddTask()} >
        <img className='w-5 h-5 ' src={Icons.PlusIcon} alt="Icon" /> 
        </div>
        </div>

        <div className='pt-5' >
            <p className='text-white'>Tasks to do - 4</p>
        </div>

        <div className='pt-5'>
        {tasks.filter(task => task.state !== 'done').map(task => (
    <Task key={task.id} task={task} />
        ))}
        </div>

        <div className='pt-5'>
        <p className='text-white'>Done</p>
        </div>

        <div className='pt-5'>
        {tasks.filter(task => task.state === 'done').map(task => (
            <Task key={task.id} task={task} />
        ))}
        </div>
        </div>
    </div>
  )
}

export default Conatiner


