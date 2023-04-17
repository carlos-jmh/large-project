import { render, screen } from "@testing-library/react";
import Householdinfo from '../householdinfo/Householdinfo';

test('verify household info displays correct information', () => {
    // Render household info with passed info.
    let name = "dorm";
    render(<Householdinfo name={name}/>);
    expect(screen.getByRole('button').id).toBe(name);
    
    
    const container = document.getElementsByTagName('span')[0];
    expect(container.textContent).toBe(name);

})