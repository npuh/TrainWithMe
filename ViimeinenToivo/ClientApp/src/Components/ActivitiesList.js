import React, { Component } from "react";
import ActivityLine from "./ActivityLine";
import Sivutus from './Sivutus';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Modifyactivity from './Modifyactivity';

class ActivitiesList extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };
    add = () => {
        this.props.add(this.props.userdata.activityId);
    };
    render() {
        let userdataItems;
        console.dir(this.props);
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                  <div>
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
    return(
            <div>              
            <form>
                {userdataItems}</form>
            </div>
        );
    }
}

export default ActivitiesList;
