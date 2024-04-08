import React from 'react';
import Icons from '../constant/Icon';
import { deleteTask, updateTaskToDone } from '../services/api/taskApi'; // Import the deleteTask and updateTaskToDone functions

interface TaskProps {
    task: {
        id: string;
        task: string;
        state: string;
    };
}

const Task: React.FC<TaskProps> = ({ task }) => {

    const handleTaskUpdate = async () => {
        try {
            await updateTaskToDone(task.id);
            console.log('Task updated to done successfully');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteTask(task.id);
            console.log('Task deleted successfully');
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className='bg-darkGray flex justify-center py-4 rounded-lg'>
            <div className='w-11/12 flex justify-between items-center'>
                <div>
                    <p className={`text-main ${task.state === 'done' ? 'line-through text-red-500' : ''}`}>
                        {task.task}
                    </p>
                </div>
                {task.state === 'to-do' && (
                    <div className='flex justify-center items-center gap-4'>
                        <img
                            className='ps-1 w-7 h-7 rounded-md cursor-pointer'
                            src={Icons.CheckedIcon}
                            alt='CheckedIcon'
                            onClick={handleTaskUpdate} // Call handleTaskUpdate on click
                        />
                        <img
                            className='p-1 w-7 h-7 rounded-md cursor-pointer'
                            src={Icons.TrashdIcon}
                            alt='TrashdIcon'
                            onClick={handleDelete} // Call handleDelete on click
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Task;
