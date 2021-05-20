import React from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
    const url = 'wss://warm-shelf-42022.herokuapp.com/';
    const socket = io(url, { transports: ['websocket', 'polling'] });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContext, SocketProvider }