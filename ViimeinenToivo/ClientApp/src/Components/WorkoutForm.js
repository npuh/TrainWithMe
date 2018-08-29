import React, { Component } from "react";
import checkbox from './checkbox.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Style.css";

const apiurl = "api/Activities";

class WorkoutForm extends Component {

    state = { Workoutname: "" };

    WorkoutSave = e => {
        this.setState({ Workoutname: e.target.value });
    };
    laheta = e => {
        e.preventDefault();
        this.props.saveWorkout(this.state);
        this.setState({ Workoutname: "" });
    };

    render() {
        return (
            <div align="center">
                <Form onSubmit={this.laheta}>
                    <h1 className="h1">Lisää uusi treeni</h1>
                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Workoutname} onChange={this.WorkoutSave} placeholder="Treenin nimi" />
                        <FormGroup />
                        <FormGroup>
                            <input className="Checkbox" type="image" src={checkbox} alt="Lisää" />
                            <FormGroup />
                        </FormGroup>
                    </FormGroup>
                </Form>
            </div>
                    );
                }
            }           
            export default WorkoutForm;
