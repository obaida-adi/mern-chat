import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { createMessage, getMessages, getUsers } from '../actions';
import './Chat.css'
import { UserContext } from '../contexts/userContext';
import { SocketContext } from '../contexts/socketContext';

const Chat  = () => {

    const { user } = useContext(UserContext);
    const socket = useContext(SocketContext);

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    getUsers().then(response => {
        const users = response.data.users;
        console.log('Got users:', users);
        setUsers(users);
    }).catch(err => {
        alert('Uh oh! Something went wrong. Please try again');
        console.log(err)
    });

    getMessages().then(response => {
        const messages = response.data.messages;
        console.log('Got messages:', messages);
        setMessages(messages);
    }).catch(err => {
        alert('Uh oh! Something went wrong. Please try again');
        console.log(err);
    });

    useEffect(() => {
        socket.on('message_event', (data) => {
            console.log(data);
        });
    });

    const sendMessage = () => {
        socket.emit('message', message);
        createMessage(this.state.value).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        }); 
    };

    const containerStyles = { 
        textAlign: 'center',
        marginTop: '3rem',  
        padding: '1rem',
        borderRadius: '10px'
    };

    return (
        <Container maxWidth='md' style={ containerStyles }>

        </Container>
    );
    
}

export default Chat;