import { React } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import AddHousehold from '../addHousehold/AddHousehold';

// Add array and function.
let houseHolds = [];

const addNewHousehold = (houseHold) => {
    houseHolds = [...houseHolds, houseHold];
  }


test('Verify dark theme works', () => {
  const { container } = render(<AddHousehold addNewHousehold={addNewHousehold}/>);

  //screen.debug();
  expect(container.getElementsByClassName('addHouse-dark')[0]).toBeInTheDocument();
})
test('Verify click changes form', () => {
  // Render component.
  const { container } = render(<AddHousehold addNewHousehold={addNewHousehold} theme="light"/>)


  // Check initial state.
  //screen.debug();
  expect(container.getElementsByClassName('addHouse')[0]).toBeInTheDocument();

  // Check when button clicks form changes.
  fireEvent.click(container.getElementsByClassName('addHouse')[0]);
  //screen.debug();

  expect(container.getElementsByClassName('btn-danger')[0].textContent).toContain("close");
})