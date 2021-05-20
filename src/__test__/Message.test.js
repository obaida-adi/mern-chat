import React from 'react';
import { render, cleanup, screen } from '@testing-library/react'
import Message from '../components/Message';

afterEach(cleanup);

test('should render', () => {
    const mockMessageData = {
        mine: true, 
        message: 'test',
        sender: 'me'
    };
    render(<Message {...mockMessageData} />);
    const message = screen.getByText(mockMessageData.message);
    expect(message).toBeInTheDocument();
    expect(message.textContent).toBe(mockMessageData.message);
});