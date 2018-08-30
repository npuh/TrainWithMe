import React, { Component } from "react";
import $ from "jquery";
import ScheduleForm from './ScheduleForm';
import ScheduleList from "./ScheduleList";
import './Workout.css';
import Modifyactivity from "./Modifyactivity";
import ActivityFormTesti from './ActivityFormTesti';
import Listatesti from "./Listatesti";
import Sivutus from './Sivutus';
import Exportti from './Exportti';
import WorkoutForm from "./WorkoutForm";
import WorkoutsList from "./WorkoutsList";
import NmWorkoutActivity from "./NmWorkoutActivity";


const apiurl = "api/Schedules";

class Schedule extends Component {


    constructor() {
        super();
        this.state = {
            userdata: [],
            WorkoutId: null

        };
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
            url: "api/Workouts",
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

    createSchedule(schedule, callback) {
        return fetch("api/Schedules", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(schedule)
        }).then(function (response) {
            callback(response.status);
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

    //updateComponent = (e) => {
    //    this.setState({ workoutId: e.target.value });
    //    console.log(e.target.value);
    //    this.forceUpdate();
    //}

    movetoSchedule = (workoutId) => {
        this.setState({ workoutId: workoutId });
        console.log(workoutId);
    }

    movetoWorkout = (workoutId) => {
        this.setState({ clicked: true });
        this.setState({ workoutid: workoutId });
        console.log("workout");
    }

    render() {
        {
            if (this.state.clicked) {
                return <NmWorkoutActivity workoutid={this.state.workoutid} />;
            }
            else {
                return (
                    <div>
                        <div className="Schedule">
                            <ScheduleForm saveSchedule={this.newSchedule} workoutId={this.state.workoutId} />
                            <WorkoutsList
                                userdata={this.state.searchdata}
                                moveto={this.movetoSchedule}
                            //onClick={(value) => { this.updateComponent(value); }}
                            />
                            <ScheduleList
                                userdata={this.state.userdata}
                                moveto={this.movetoWorkout}
                            />
                        </div>
                    </div>
                );
            }
        }
    }
}

export default Schedule;
