import { React, useState } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import ListItem from '../listItem/ListItem';

let todo = {
    completed: false,
    createdAt: "2023-04-29T23:16:57.451Z",
    description: null,
    id: "1f2ba9e6-7f59-4e42-83ad-3dac0abe4350",
    itemTaskId: null,
    listId: "be151400-9745-4207-88a7-f9a9fd6fec1e",
    taskId: null,
    title: "new task g",
    updatedAt: "2023-04-29T23:27:00.516Z",
    _deleted: null,
    _lastChangedAt: 1682810820550,
    _version: 2
}

// Verify List Item has the correct values
test('Verify ListItem values', () => {
    render(<ListItem item={todo} listIndex={1} handleListItemUpdate={() => {}} handleListItemDelete={() => {}}/>)

    // Expect Div to have correct id. 
    expect(document.getElementById(todo.id)).toBeInTheDocument();

    // Id correct.
    expect(screen.getByText(todo.title)).toBeInTheDocument();
})

// test('Verify clicking three dots works', () => {
//     render(<ListItem item={todo} listIndex={1} handleListItemUpdate={() => {}} handleListItemDelete={() => {}}/>)

//     expect(document.getElementsByClassName("threedots")[0]).toBeInTheDocument();

//     fireEvent.click(document.getElementsByClassName("threedots")[0]);

//     expect(document.getElementsByClassName("editableP")[0]).toBeInTheDocument();
// })