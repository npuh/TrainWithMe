import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import checkbox from './checkbox.png';

export default class ActivityFormTesti extends React.Component {
    state = { Activityname: "", Weight: "", Reps: "", Rounds: "", Rest: "", Duration: "" };
    ActivityTallennus = e => {
        this.setState({ Activityname: e.target.value });
    };
    WeightTallennus = e => {
        this.setState({ Weight: e.target.value });
    };
    RepsTallennus = e => {
        this.setState({ Reps: e.target.value });
    };
    RoundsTallennus = e => {
        this.setState({ Rounds: e.target.value });
    };
    RestTallennus = e => {
        this.setState({ Rest: e.target.value });
    };
    DurationTallennus = e => {
        this.setState({ Duration: e.target.value });
    };
    laheta = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.saveActivity(this.state);
        this.setState({ Activityname: "", Weight: "", Reps: "", Rounds: "", Rest: "", Duration: "" });
    };



    render() {
        return (

            <Form onSubmit={this.laheta} className="kysely">
                <h1 className="h1">Lisää uusi liike </h1>
                <FormGroup>
                    <input type="text" className="form-control" value={this.state.Activityname} onChange={this.ActivityTallennus} placeholder="Liikkeen nimi" />
                    <FormGroup />
                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Weight} onChange={this.WeightTallennus} placeholder="Painot/kg" />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Reps} onChange={this.RepsTallennus} placeholder="Toistot" />
                    </FormGroup>
                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Rounds} onChange={this.RoundsTallennus} placeholder="Sarjat" />
                    </FormGroup>
                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Rest} onChange={this.RestTallennus} placeholder="Lepo 00:00:00" />
                    </FormGroup>
                    <FormGroup>
                        <input type="text" className="form-control" value={this.state.Duration} onChange={this.DurationTallennus} placeholder="Kesto 00:00:00"  />
                    </FormGroup>
                    <input className="Checkbox" type="image" src={checkbox} alt="Lisää" />
                </FormGroup>
            </Form>

        );
    }
}