import React, { Component } from "react";
import $ from "jquery";
import ActivityForm from './ActivityForm';
import ActivitiesList from "./ActivitiesList";
import './Workout.css';
import ActivityFormTesti from './ActivityFormTesti';
import Listatesti from "./Listatesti";
import Sivutus from './Sivutus';
import Exportti from './Exportti';

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
        return (
            <div>
                <Exportti />
                
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        <ActivitiesList className="activitiesList"
                            userdata={this.state.userdata}
                            remove={this.deleteActivity}
                        />  
                    </div>                
                    <div class="col">                    
                        <ActivityFormTesti saveActivity={this.newActivity} />
                    </div>
                    <div>
             
                    </div>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default Workout;
