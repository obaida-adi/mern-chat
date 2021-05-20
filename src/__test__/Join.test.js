import React from 'react';
import { render, cleanup, screen } from '@testing-library/react'
import Join from '../components/Join';
import { UserProvider } from '../contexts/userContext';

afterEach(cleanup);

beforeEach(() => {
    render(
        <UserProvider>
            <Join />
        </UserProvider>
    );
})

test('should render', () => {
    const nicknameInput = screen.getByPlaceholderText("Johnny Two Shoes");
    expect(nicknameInput).toBeInTheDocument();
});