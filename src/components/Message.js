import React from 'react';
import theme from '../theme.js';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

const Message = (props) => {

    const mine = props.mine;
    const message = props.message;
    const senderName = props.senderName;

    const messageStyles = {
        width: '100%',
        padding: '1rem',
        alignSelf: 'flex-start',
        backgroundColor: '#eee',
        borderRadius: '10px',
        marginTop: '0.5rem'
    }

    const myMessageStyles = {
        ...messageStyles,
        color: '#fff',
        backgroundColor: theme.palette.primary.main
    }

    return (
        <ListItem style={ mine ? myMessageStyles : messageStyles }>
            <ListItemText 
                primary={
                    <React.Fragment>
                        <Typography component="span" variant="body1" style={{ fontWeight: 'bold' }}>{senderName}</Typography>
                    </React.Fragment>
                    } 
                secondary={ 
                    <React.Fragment>
                        <Typography component="span" variant="body2" style={ mine ? { color: 'white' } : { color: 'black' } }>{message}</Typography>
                    </React.Fragment>
                }></ListItemText>
        </ListItem>
    );
}

export default Message;