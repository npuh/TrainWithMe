import React, { Component } from "react";
import checkbox from './checkbox.png';
import "./Style.css";
import './ActivityForm.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ScheduleForm extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("ScheduleForm statit props", props);
        console.log("ScheduleForm statit state", state);
        if (props.workoutId === state.workoutId) {
            return null;
        }
        return { workoutId: props.workoutId };
    }
    constructor(props) {
        super(props);
        this.state = { UserId: "", Date: "", workoutId: "" };
    }

    UserIdSave = e => {
        this.setState({ UserId: e.target.value });
    };

    DateSave = e => {
        this.setState({ Date: e.target.value });
    };

    WorkoutIdSave = e => {
        this.setState({ workoutId: e.target.value });
    };

    laheta = e => {
        e.preventDefault();
        this.props.saveSchedule(this.state);
        this.setState({ UserId: "", Date: "", workoutId: "" });
    };


    render() {
        return (
            <div align="center">
                <Form onSubmit={this.laheta}>
                    <h1 className="h1">Lisää uusi aikataulu</h1>
                    <FormGroup>
                                    <input className="formiformi" value={this.state.UserId} onChange={this.UserIdSave} placeholder="Käyttäjätunnus" />
                        </FormGroup>
                    <FormGroup>
                                    <input className="formiformi" type= "datetime-local" value={this.state.Date} onChange={this.DateSave} placeholder="Päivämäärä ja aika" />
                        </FormGroup>
                    <FormGroup>
                                    input className="formiformi" value={this.state.workoutId} onChange={this.WorkoutIdSave} placeholder="Ei valittu" disabled />
                        </FormGroup>
                                    <input className="Checkbox" type="image" src={checkbox} alt="Lisää" />
 
                </Form>
            </div>
        );
    }
}

export default ScheduleForm;
