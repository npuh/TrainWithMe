import React, { Component } from "react";
import ActivityLine from "./ActivityLine";
import Sivutus from './Sivutus';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class ActivitiesList extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };
    add = () => {
        this.props.add(this.props.userdata.activityId);
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
                        <div className="lines"></div>
                        <form align="center">
                            {userdataItems}</form>

                        <ActivityLine
                            userdata={userdata}
                            remove={this.props.remove}
                            add={this.props.add}
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
              
                <h1 className="h1">Aktiviteetit</h1>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <div className="lines" />

                    <form align="center">
                        {userdataItems}</form>
                   
            </div>
        );
    }
}

export default ActivitiesList;
