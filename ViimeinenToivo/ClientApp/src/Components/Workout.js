import React, { Component } from "react";
import Schedule from "./Schedule";

class Workout extends Component {
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Workout">
                        <div className="lines"></div>
                        <table align="center">
                            {userdataItems}</table>

                        <Schedule
                            userdata={userdata}
                            remove={this.props.remove}
                            key={userdata.activityId}
                        />
                    </div>
                );
            });
        }
        return (
            <div className="TuoteYksikko">
                <h1>Activities list</h1>
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

export default Workout;
