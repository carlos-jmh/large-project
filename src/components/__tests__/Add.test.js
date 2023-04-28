import { react } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Add from '../add/Add'
import taskData from '../../containers/middle/taskData.json';

let tasks = taskData;

const addTask2 = (userInput ) => {
    let copy = [...tasks];
    copy = [...copy, { id: tasks.length + 1, task: userInput, complete: false }];
    let tasks = copy;
}

// Upon load add == false
test('Verify compressed add', () => {
    render(<Add addTask={addTask2} name="Event"/>)
    expect(screen.getByText(`Add to Event`)).toBeInTheDocument();
})

// If load == true
test('Verify onClick event works', () => {
    const { container } = render(<Add addTask={addTask2} name="Event"/>)

    // Fire event to click on Add to
    fireEvent.click(container.getElementsByTagName('p')[0]);

    // Expect form to change .
    expect(screen.getByText(`close`)).toBeInTheDocument();
    expect(screen.getByText(`add`)).toBeInTheDocument();

    // Expect two inputs to be in the form.
    expect(container.getElementsByTagName('input')[0].placeholder).toBe("Event Name");
    expect(container.getElementsByTagName('input')[1].placeholder).toBe("Event Description");    
})