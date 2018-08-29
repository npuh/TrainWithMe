import React, { Component } from 'react';
import { Holdable } from 'react-touch';

class Touch extends Component {
    render() {
        return (
            <Holdable onHoldComplete={handleHold}>
                ({holdProgress}) => <button style={{ opacity: holdProgress }} />
            </Holdable>
        );
    }
}
export default Touch;