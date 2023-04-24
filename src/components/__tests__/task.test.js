import { react } from 'react';
import { render, screen } from "@testing-library/react";
import Task from '../task/Task';
import taskData from '../../containers/middle/taskData.json';

let tasks = taskData;

const handleCheck = (id) => {
    let mapped = tasks.map(task => {
        return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });

    let tasks = mapped;
}

test('Verify all tasks displays correct information, have right key and value', () => {
    render (tasks?.map(task => {
        return (
            <div>
                <Task task={task} handleCheck={handleCheck} type="task"/>
            </div>
        )      
    }))
    
    for (let i = 0; i < Object.keys(tasks).length; i++)
    {
        expect(screen.getByText(tasks[i].task)).toBeInTheDocument();
    }
});

test('Verify all tasks intially unchecked', () => {
    render (tasks?.map(task => {
        return (
            <div>
                <Task task={task} handleCheck={handleCheck} type="task"/>
            </div>
        )      
    }))

    for (let i = 0; i < Object.keys(tasks).length; i++)
    {
        // Check if input checked value = false.
        const input = document.getElementsByTagName('input');
        expect(input[0].checked).toBe(false);
    }
})