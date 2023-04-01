import { React } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import AddHousehold from '../addHousehold/AddHousehold';

// Add array and function.
let houseHolds = [];

const addNewHousehold = (houseHold) => {
    houseHolds = [...houseHolds, houseHold];
  }

test('Verify click changes form', () => {
    // Render component.
    const { container } = render(<AddHousehold addNewHousehold={addNewHousehold}/>)


    // Check initial state. 
    expect(container.getElementsByClassName('addHouse')[0]).toBeInTheDocument();

    // Check when button clicks form changes.
    fireEvent.click(container.getElementsByClassName('addHouse')[0]);

    expect(container.getElementsByClassName('btn-danger')[0].textContent).toContain("close");
})