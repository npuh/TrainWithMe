import React, { Component } from "react";
import $ from "jquery";
import ActivityForm from './ActivityForm';
import ActivitiesList from "./ActivitiesList";
import './Workout.css';
import Modifyactivity from "./Modifyactivity";
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
               <div>
                <Exportti />                              
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
            </div>
        );
    }
}

export default Workout;
