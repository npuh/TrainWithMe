import React, { Component } from "react";
import WorkoutLine from "./WorkoutLine";


class WorkoutsList extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.WorkoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.WorkoutId);
    };
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Workouts">
                        <div className="lines"></div>
                        <table align="center">
                            {userdataItems}</table>
                        <WorkoutLine
                            userdata={userdata}
                            remove={this.props.remove}
                            moveto={this.props.moveto}
                            key={userdata.workoutId}
                        />
                        </div>
                );
            });
        }
        return (
            <div className="TuoteYksikko">
                <h1 className="h1">Treenilista</h1>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <div className="lines" />
                <table align="center">
                    {userdataItems}</table>
            </div>
        );
    }
}

export default WorkoutsList;
