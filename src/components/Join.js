import React, { useContext, useState } from 'react';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { createUser } from '../actions';

import { UserContext } from '../contexts/userContext';
import { useHistory } from 'react-router';
import { SocketContext } from '../contexts/socketContext';

import logo from '../assets/images/logo.png';
import './Join.css';

const Join = () => {

    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const socket = useContext(SocketContext);

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        createUser(name).then(user => {
            console.log('Created new user:', user);

            const newUser = { id: user._id, name: user.name };
            setUser(newUser);
            socket.emit('join', newUser);
            history.push('/chat');
        }).catch(err => {
            alert('Uh oh! Something went wrong. Please try again');
            console.log(err);
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
            <img src={ logo } alt="ping logo" className="logo"></img>
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 'bold' }}>👋  Hi there! To join the conversation, enter a nickname.</Typography>
            <TextField onChange={ handleChange } variant="outlined" placeholder="Johnny Two Shoes" id="outlined-basic" label="Nickname"></TextField>
            <Button onClick={ handleSubmit } endIcon={<ArrowForwardIcon />} style={{ fontWeight: 'bold', marginTop: '10px', marginLeft: '1rem' }} variant="contained" color="primary">Join</Button>
        </Container>
    );
}

export default Join;