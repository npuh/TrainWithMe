import React, { Component } from "react";
import $ from "jquery";
import ActivityForm from './ActivityForm';
import ActivitiesList from "./ActivitiesList";
import './Workout.css';
import Modifyactivity from "./Modifyactivity";



const apiurl = "api/Activities";

class Workout extends Component {
    constructor() {
        super();
        this.state = {
            userdata: []
        };
    }

    componentWillMount() {
        this.getUserData();
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        $.ajax({
            url: apiurl,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ userdata: data }, function () {
                });
            }.bind(this),
            error: function (xhr, status, err) {
            }
        });
    }

    createActivity(activity, callback) {
        return fetch("api/Activities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(activity)
        }).then(function (response) {
            callback(response.status);
        });
    }

    deleteActivity(activityId) {
        return fetch("api/Activities/" + activityId, {
            method: "DELETE"
        });
    }

    newActivity = newactivity => {
        this.createActivity(
            newactivity,
            function () {
                this.getUserData();
            }.bind(this)
        );
    };

    deleteActivityDel = removableId => {
        this.deleteActivity(removableId).then(
            function (response) {
                this.getUserData();
            }.bind(this)
        );
    };

    modifyActivity(activity, id) {
        console.log(activity);
        console.dir(activity.Activityname);
        return fetch("api/Activities/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(activity)
        }).then(function (response) {
            console.log(response.status);
            //callback(response.status);
        });
    }

    updateEntry = (updatentry, id) => {
        console.dir(updatentry);
        console.log("moro");
        this.modifyActivity(updatentry, id);
        console.log("moikka");
    };

    render() {
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <ActivitiesList className="activitiesList"
                            userdata={this.state.userdata}
                            remove={this.deleteActivity}
                            editactivity={this.updateEntry}

                    />
                    </div>
                    <div class="col">
                        <ActivityForm saveActivity={this.newActivity} />
                      
                    </div>
                    
                </div>
              
            </div>
        );
    }
}

export default Workout;
