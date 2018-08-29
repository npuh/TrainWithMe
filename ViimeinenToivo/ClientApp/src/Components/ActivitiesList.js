import React, { Component } from "react";
import ActivityLine from "./ActivityLine";

class ActivitiesList extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Workout">


                        <table align="center">
                          
                                {userdataItems}
                           
                        </table>

                        <ActivityLine
                            userdata={userdata}
                            remove={this.props.remove}
                            key={userdata.activityId}
                            id={userdata.activityId}
                            editactivity={this.props.editactivity}
                        />

                    </div>
                );
            });
        }
        return (
            <div className="TuoteYksikko">
                <h1 className="harjoitusotsikko">Aktiviteetit</h1>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <div className="lines" />
                <table align="center">
                {userdataItems}
                
                </table>
            </div>
        );
    }
}

export default ActivitiesList;
