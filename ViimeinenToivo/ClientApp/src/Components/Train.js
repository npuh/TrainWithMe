import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import Workout from './Workout';
import './Train.css';

class Train extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Tähän treenin tiedot.
                         </div>
                    </div>
                </div>
                <Stopwatch/>
            </div>
            );
    }
}

export default Train;