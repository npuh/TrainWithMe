import React, { Component } from "react";
import $ from "jquery";
import ActivityForm from './ActivityForm';
import ActivitiesList from "./ActivitiesList";

const apiurl = "api/Schedules";

class Schedule extends Component {
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

    createSchedule(schedule, callback) {
        return fetch("api/Schedules", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(schedule)
        }).then(function (response) {
            callback(response.status);
        });
    }

    deleteSchedule(scheduleId) {
        return fetch("api/Schedules/" + scheduleId, {
            method: "DELETE"
        });
    }

    newSchedule = newschedule => {
        this.createSchedule(
            newschedule,
            function () {
                this.getUserData();
            }.bind(this)
        );
    };

    deleteScheduleDel = removableId => {
        this.deleteSchedule(removableId).then(
            function (response) {
                this.getUserData();
            }.bind(this)
        );
    };

    render() {
        return (
            <div className="Schedule">
                <ActivitiesList
                    userdata={this.state.userdata}
                    remove={this.deleteActivity}
                />
                <ActivityForm saveActivity={this.newActivity} />
            </div>
        );
    }
}

export default Schedule;
