import React, { Component } from "react";
import $ from "jquery";
import WorkoutForm from "./WorkoutForm";
import WorkoutsList from "./WorkoutsList";
import NmWorkoutActivity from "./NmWorkoutActivity";

const apiurl = "api/Workouts";

class Workout extends Component {


    constructor() {
        super();
        this.state = {
            userdata: [],
            clicked: false,
            workoutid : null

        };
    }

    componentWillMount() {
        this.getUserData();
        
    }

    componentDidMount() {
        this.getUserData();
        this.setState({ clicked: false });
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

    createWorkout(workout, callback) {
        return fetch("api/Workouts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        }).then(function (response) {
            callback(response.status);
        });
    }

    newWorkout = newworkout => {
        this.createWorkout(
            newworkout,
            function () {
                this.getUserData();
            }.bind(this)
        );
    };

    movetoWorkout = (workoutId) => {
        this.setState({ clicked : true });
        this.setState({ workoutid : workoutId });
    }

    render() {
        {
            if (this.state.clicked) {
                return <NmWorkoutActivity workoutid={this.state.workoutid}/>;
            }
            else {
                return (
                    <div className="Workout">
                        <WorkoutForm saveWorkout={this.newWorkout} />
                        <WorkoutsList
                            userdata={this.state.userdata}
                            moveto={this.movetoWorkout}
                        />
                    </div>
                );
            }
        }
        
    }
}

export default Workout;
