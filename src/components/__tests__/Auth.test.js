import { react } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Auth from '../auth/Auth'

test('Verify signIn leads to correct page', () => {
    const { container } = render(<Auth auth="signIn"/>)

    expect(container.getElementsByClassName('signinContainer')[0]).toBeInTheDocument();
});

test("Verify signIn page 'Sign Up' leads to correct page", () => {
    const { container } = render(<Auth auth="signIn"/>);

    fireEvent.click(container.getElementsByTagName('span')[0]);

    expect(container.getElementsByClassName('signupContainer')[0]).toBeInTheDocument();
});

test('Verify signUp leads to correct page', () => {
    const { container } = render(<Auth auth="signUp"/>)

    expect(container.getElementsByClassName('signupContainer')[0]).toBeInTheDocument();
});

test("Verify signup page 'Sign In' leads to correct page", () => {
    const { container } = render(<Auth auth="signUp"/>);

    fireEvent.click(container.getElementsByTagName('span')[0]);

    expect(container.getElementsByClassName('signinContainer')[0]).toBeInTheDocument();
});

