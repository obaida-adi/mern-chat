import React, { useContext, useEffect, useState, useRef } from 'react';
import { 
    List, 
    TextField, 
    Button, 
    Container, 
    Typography,
    CircularProgress
} from '@material-ui/core';
import { createMessage, getMessages, getUsers } from '../actions';
import { UserContext } from '../contexts/userContext';
import { SocketContext } from '../contexts/socketContext';
import { ArrowBack, Send } from '@material-ui/icons';
import { useHistory } from 'react-router';
import Message from './Message';
import Logo from './Logo';

const Chat = () => {

    const SYSTEM_NAME = 'Ping';

    const { user } = useContext(UserContext);
    const socket = useContext(SocketContext);
    const messagesBottomRef = useRef(null);

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    // On first render, get users and messages
    useEffect(() => {

        if (Object.keys(user).length === 0) {
            // If there is no user and they're on the chat page, then that's an error
            setError(true);
        } else {

            setError(false);

            Promise.all([getUsers(), getMessages()]).then(([userResponse, messageResponse]) => {
                const _users = userResponse.data.users;
                const _messages = messageResponse.data.messages;

                setUsers(_users);
                setMessages(_messages);
                setLoading(false);
                scrollToBottom();
            }).catch((err) => {
                setError(true);
                setLoading(false);
                console.log(err)
            });
        }
    }, [user]);

    // Listen for socket messages
    useEffect(() => {
        socket.on('join_event', (data) => {
            setMessages([...messages, { content: `👀 ${data.name} has joined!`, sender: SYSTEM_NAME }]);
            setUsers([...users, data])
        });

        socket.on('message_event', (data) => {
            setMessages([...messages, { content: data.content, sender: data.sender }]);
        });

        socket.on('leave_event', (data) => {
            setMessages([...messages, { content: `✌️ ${data.name} has left!`, sender: SYSTEM_NAME }]);
            setUsers([...users, data])
        });
    });

    const sendMessage = () => {
        createMessage(message, user._id).then(() => {
            socket.emit('message', { content: message, sender: user._id });
            setMessage('');
        }).catch(err => {
            console.log(err)
        }); 
    };

    const getNameByUserId = (userId) => {
        if (userId === SYSTEM_NAME) {
            return SYSTEM_NAME;
        }
        const _user = users.find((user) => user._id === userId);
        return _user?.name || '';
    }

    const isMessageMine = (sender) => {
        return sender === user._id;
    }

    const scrollToBottom = () => {
        messagesBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    // This could be replaced by useStyles() from material
    const mainContainerStyles = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const messageContainerStyles = { 
        height: '50rem',
        maxHeight: '50rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '1rem',
        backgroundColor: '#ddd',
        borderRadius: '10px'
    };

    const messageInputContainerStyles = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const messageListContainerStyles = {
        height: '40rem',
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        overflowY: 'auto'
    };

    return loading ? (
        <Container style={ mainContainerStyles }>
            <CircularProgress />
        </Container>
    ) :
    error ? (
        <Container style={ mainContainerStyles }>
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 'bold', textAlign: 'center' }}>😓 Oops! You're not logged in.</Typography>
            <Typography gutterBottom variant="h6" component="h2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Try joining again from the home page.</Typography>
            <Button onClick={() => history.push('/') } endIcon={<ArrowBack />} style={{ fontWeight: 'bold', marginLeft: '1rem' }} variant="contained" color="primary">Go home</Button>
        </Container>
    ) : (
        <Container style={ mainContainerStyles }>
            <Logo width="8rem" />
            <Container style={ messageContainerStyles }>
                <Container style={ messageListContainerStyles }>
                    <List>
                        {
                            messages.length > 0 ? 
                                messages.map((message, index) => {
                                    return <Message key={index} mine={isMessageMine(message.sender)} message={message.content} senderName={getNameByUserId(message.sender)}/>
                                }) : 
                                <Message mine={false} message="🥲 No one has said anything. Start the conversation!" senderName={SYSTEM_NAME} />
                        }
                        <div ref={messagesBottomRef} />
                    </List>
                </Container>
                <Container style={ messageInputContainerStyles }>
                    <TextField style={{ width: '20rem' }} value={message} onChange={(event) => setMessage(event.target.value)} variant="outlined" placeholder="Send message" label="Message"></TextField>
                    <Button disabled={ message.trim() === '' } onClick={ sendMessage } endIcon={<Send />} style={{ fontWeight: 'bold', marginLeft: '0.5rem' }} variant="contained" color="primary">Send</Button>
                </Container> 
            </Container>
        </Container>
    );
}

export default Chat;