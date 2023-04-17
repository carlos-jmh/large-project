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
// test('Correct amount of list items', () => {
//     render(<List toDoList={toDoList} handdleToggle={handleToggle}/>)

//     // Count the number of ListItems in div name 'items'
//     const container = document.getElementsByClassName('items');
//     console.log(container.children);

//     // expect(container.children.length).toBe(Object.keys(data).length);
// });