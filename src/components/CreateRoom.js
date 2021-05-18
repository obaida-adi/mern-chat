import React from 'react';
import { createRoom } from '../actions';

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        
        createRoom(this.state.value);
        console.log('Creating new room: ', this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="My new room" />
                <input type="submit" value="Create Room"></input>
            </form>
        )
    }
}

export default CreateRoom;