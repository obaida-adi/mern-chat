import React from 'react';
import io from 'socket.io-client';
import api from '../api';

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {

    const socket = io(api.rootUrl, { transports: ['websocket', 'polling'] });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContext, SocketProvider }