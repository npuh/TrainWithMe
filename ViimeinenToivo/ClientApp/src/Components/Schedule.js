import React, { Component } from "react";
import Workout from './Workout';

class Schedule extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };

    render() {
                return (
                    <div>
                        <tr className="Schedule">
              
                            <td>&nbsp;</td>
                            <button type="button" onClick={this.remove}>Poista</button>
                            <td>&nbsp;</td>
                            <td>{this.props.userdata.activityname}</td>
                            
                        </tr>
                    </div>
                );

        }
    }

export default Schedule;
