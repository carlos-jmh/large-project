import { react } from 'react';
import { getByText, render, screen } from "@testing-library/react";
import Add from '../add/Add'
import taskData from '../../containers/middle/taskData.json';

let tasks = taskData;

const addTask2 = (userInput ) => {
    let copy = [...tasks];
    copy = [...copy, { id: tasks.length + 1, task: userInput, complete: false }];
    let tasks = copy;
  }

test('Display add task when true', () => {
    render(<Add addTask={addTask2} state={true}/>)
    expect(screen.getByText(/close/i)).toBeInTheDocument();
    expect(screen.getByText(/add/i)).toBeInTheDocument();
})

test("Don't display add options when false", () => {
    render(<Add addTask={addTask2} state={false}/>)
    expect(screen.getByText('Add task/item')).toBeInTheDocument();
})