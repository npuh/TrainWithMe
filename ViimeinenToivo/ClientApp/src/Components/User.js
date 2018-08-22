import React, { Component } from "react";
import $ from "jquery";
import Schedule from './Schedule';
import Workout from './Workout';

const apiurl = "api/Activities";

class User extends Component {
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
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
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

    deleteActivity(activityid) {
        return fetch("api/ostoslista/" + activityid, {
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

    deleteActivity = removableId => {
        this.deleteActivity(removableId).then(
            function (response) {
                this.getUserData();
            }.bind(this)
        );
    };

    render() {
        return (
            <div className="User">
                <Workout
                    userdata={this.state.userdata}
                    remove={this.deleteActivity}
                />
            </div>
        );
    }
}

export default User;
