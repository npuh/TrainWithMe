import React, { Component } from "react";
import Workout from './Workout';

class Schedule extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityid);
    };

    render() {
                return (
                    <div>
                        <tr className="Schedule">
              

                            <td>{this.props.userdata.activityname}</td>

                            <td>{this.props.userdata.weight}</td>

                            <td>{this.props.userdata.duration}</td>

                            <td>{this.props.userdata.reps}</td>

                            <td>{this.props.userdata.rounds}</td>

                            <td>{this.props.userdata.rest}</td>

                        </tr>
                    </div>
                );

        }
    }

export default Schedule;
