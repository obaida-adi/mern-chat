import React, { useEffect, useState } from 'react';
import StorageTokens from '../enums/storageTokens';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedData = sessionStorage.getItem(StorageTokens.USER_DATA);

        if (!!storedData) {
            const cachedUser = JSON.parse(storedData);
            setUser(cachedUser); 
        }    
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };