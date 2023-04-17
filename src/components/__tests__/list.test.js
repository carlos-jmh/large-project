import { React, useState } from 'react';
import { render, screen } from "@testing-library/react";
import List from '../list/List';
import ListItem from '../listItem/ListItem';
import data from '../../containers/middle/data.json';

let toDoList = data;

const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
        return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    toDoList = mapped;
}

// Title of list not functional yet.
// test('Verify list title ', () => {
//     render(<List toDoList={toDoList} handleToggle={handleToggle}/>)
// });

// Verify items have correct ammount of list items.
test('Correct amount of list items', () => {
    render(<List toDoList={toDoList} handdleToggle={handleToggle}/>)

    // On load, list should be closed, and have no children.
    const container = document.getElementsByClassName('items');
    expect(container.children).toBe('undefined');

    // On open, list should update children.
    // How can I alter setOpen in my rendered list?
    // expect(container.children.length).toBe(Object.keys(data).length);
});