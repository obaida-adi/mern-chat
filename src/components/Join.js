import React, { useContext, useState } from 'react';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { createUser } from '../actions';
import { UserContext } from '../contexts/userContext';
import { useHistory } from 'react-router';
import { SocketContext } from '../contexts/socketContext';
import storageTokens from '../enums/storageTokens';
import Logo from './Logo';
import Footer from './Footer';

const Join = () => {

    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const socket = useContext(SocketContext);

    const [name, setName] = useState('');

    const join = () => {
        createUser(name).then(response => {
            const user = response.data.user;

            setUser(user);
            sessionStorage.setItem(storageTokens.USER_DATA, JSON.stringify(user));

            socket.emit('join', user);
            history.push('/chat');
        }).catch(err => {
            alert('Uh oh! Something went wrong. Please try again');
            console.log(err);
        });
    };

    const containerStyles = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const inputContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Container style={ containerStyles }>
            <Logo width="18rem" />
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 'bold', textAlign: 'center' }}>👋  Hi there! To join the conversation, enter a nickname.</Typography>
            <Container style={ inputContainerStyles }>
                <TextField onChange={(event) => setName(event.target.value)} variant="outlined" placeholder="Johnny Two Shoes" label="Nickname"></TextField>
                <Button disabled={ name.trim() === '' } onClick={ join } endIcon={<ArrowForwardIcon />} style={{ fontWeight: 'bold', marginLeft: '1rem' }} variant="contained" color="primary">Join</Button>
            </Container>
            <Footer />
        </Container>
    );
}

export default Join;