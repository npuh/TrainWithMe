import React, { Component } from "react";
import $ from "jquery";
import Schedule from './Schedule';
import Workout from './Workout';
import Activity from './Activity';

const apiurl = "api/Activities";

class Search extends Component {
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
            <div className="User">
                <Workout
                    userdata={this.state.userdata}
                    remove={this.deleteActivity}
                />

            </div>
        );
    }
}

export default Search;
