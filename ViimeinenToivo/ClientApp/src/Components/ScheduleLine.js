import React, { Component } from "react";

class ScheduleLine extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.workoutId);
    };

    render() {
        return (
            <div>
                <tr className="WorkoutLine">

                    <td>&nbsp;</td>
                    <button type="button" onClick={this.remove}>Poista</button>
                    <td>&nbsp;</td>
                    <button type="button" onClick={this.moveto}>Siirry workoutiin</button>
                    <td>&nbsp;</td>
                    <td>{this.props.userdata.date}</td>

                </tr>
            </div>
        );

    }
}

export default ScheduleLine;
