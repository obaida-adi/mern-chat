import React from 'react';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            roomId: this.props.match.params.id
        });
    }

    render() {
        return (
            <h1>My Room</h1>
        );
    }
}

export default Room;