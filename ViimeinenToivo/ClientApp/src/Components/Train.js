import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import WorkoutsList from './WorkoutsList';
import './Train.css';

class Train extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">

                         </div>
                    </div>
                </div>
                <Stopwatch/>
            </div>
            );
    }
}

export default Train;