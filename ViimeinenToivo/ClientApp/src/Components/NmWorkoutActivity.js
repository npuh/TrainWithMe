import React, { Component } from "react";
import "./Style.css";
import ActivityForm from "./ActivityForm";
import ActivitiesList from "./ActivitiesList";
import $ from "jquery";

const apiurl = "api/Activities";

class NmWorkoutActivity extends Component {

    constructor() {
        super();
        this.state = { userdata: [], searchdata: [] };
    }

    componentWillMount() {
        this.getUserData();
        this.getUserSearchData();

    }

    componentDidMount() {
        this.getUserData();
        this.getUserSearchData();
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

    getUserSearchData() {
        $.ajax({
            url: "api/Activities/ByWorkId/" + this.props.workoutid,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ searchdata: data }, function () {
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

    addToWorkOut(activityId, callback) {
        return fetch("api/NmWorkoutActivities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                workoutId: this.props.workoutid,
                activityId: activityId
            })
        }).then(function (response) {
            callback(response.status);
        });
    }

    newActivity = newactivity => {
        this.addToWorkOut(
            newactivity,
            function () {
                this.getUserSearchData();
            }.bind(this)
        );
    };


    render() {
        return (
            <div align="center">
                <h1>{this.props.workoutid}</h1>
                <ActivitiesList
                    userdata={this.state.searchdata}
                    remove={this.deleteActivity}
                    add={this.newActivity}
                />

                <ActivitiesList
                    userdata={this.state.userdata}
                    remove={this.deleteActivity}
                    add={this.newActivity}
                />
                <ActivityForm saveActivity={this.newActivity} />
            </div>
        );
    }
}

export default NmWorkoutActivity;
