import Axios from './AxiosConfig';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function to generate UUIDs

export const AddTask = async (text: string) => {
    try {
        const taskId = uuidv4(); // Generate a unique UUID for the task
        const res = await Axios.post('tasks', { id: taskId, task: text, state: 'to-do' });
        console.log('Task added successfully:', res.data);
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

export const getAllTasks = async () => {
    try {
        const res = await Axios.get('tasks');
        return res.data
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

export const deleteTask = async (taskId: string) => {
    try {
        await Axios.delete(`tasks/${taskId}`);
        console.log('Task deleted successfully');
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

export const updateTaskToDone = async (taskId: string) => {
    try {
        await Axios.patch(`tasks/${taskId}`, { state: 'done' });
        console.log('Task updated to done successfully');
    } catch (error) {
        console.error('Error updating task to done:', error);
    }
};