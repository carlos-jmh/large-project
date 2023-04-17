import { React, useState } from 'react';
import { render, screen } from "@testing-library/react";
import ListItem from '../listItem/ListItem';
import data from '../../containers/middle/data.json';

let toDoList = data;

const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
        return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    toDoList = mapped;
}

// Verify List Item has the correct values
test('Verify ListItem values', () => {
    let todo = {"id": 1, "task": "Give dog a bath", "complete": true};
    let todo2 = {"id": 4, "task": "Feed cat", "complete": false};
    render(<ListItem todo={todo} handleToggle={handleToggle}/>)
    render(<ListItem todo={todo2} handleToggle={handleToggle}/>)

    // Get 
    let item = document.getElementById(todo.id);
    let item2 = document.getElementById(todo2.id);

    // Id correct.
    expect(parseInt(item.id)).toBe(todo.id);
    expect(parseInt(item2.id)).toBe(todo2.id);

    // Correct class.
    expect(item.className).toBe("todo strike");
    expect(item2.className).toBe("todo");

    // Correct text content.
    expect(item.textContent).toBe(todo.task);
    expect(item2.textContent).toBe(todo2.task);
})