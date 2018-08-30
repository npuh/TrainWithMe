import React, { Component } from "react";
import ScheduleLine from "./ScheduleLine";

class ScheduleList extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.workoutId);
    };
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Schedules">
                        <div className="lines"></div>
                        <table align="center">
                            {userdataItems}</table>

                        <ScheduleLine
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
                <h1 className="harjoitusotsikko">SchedulesList</h1>
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

export default ScheduleList;
