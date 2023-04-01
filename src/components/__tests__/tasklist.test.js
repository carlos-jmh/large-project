import { React } from 'react';
import { render, screen } from "@testing-library/react";
import TaskList from '../tasklist/TaskList';
import Task from '../task/Task';
import taskData from '../../containers/middle/taskData.json';

let tasks = taskData;

// Handle check function.
const handleCheck = (id) => {
    let mapped = tasks.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    let tasks = mapped;
  }

test('Verify TaskList', () => {
    // Render the component.
    render(<TaskList task={tasks} handleCheck={handleCheck}/>)

    // Check that the tasks are rendered.
    screen.debug();
})