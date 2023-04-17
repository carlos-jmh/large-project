import { render, screen } from "@testing-library/react";
import Householdinfo from '../householdinfo/Householdinfo';

test('verify household info displays correct information', () => {
    // Make sure value is of correct data.
    let name = "dorm";
    render(<Householdinfo name={name}/>);
    expect(screen.getByRole('button').id).toBe(name);
    
    // Make sure displays correct info.
    const container = document.getElementsByTagName('span')[0];
    expect(container.textContent).toBe(name);

})