import React, { Component } from "react";
import $ from "jquery";
import ActivityForm from './ActivityForm';
import ActivitiesList from "./ActivitiesList";
import './Workout.css';

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

    render() {
        return (
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        <ActivitiesList className="activitiesList"
                            userdata={this.state.userdata}
                            remove={this.deleteActivity}
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
