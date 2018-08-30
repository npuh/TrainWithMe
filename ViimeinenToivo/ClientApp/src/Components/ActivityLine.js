import React, { Component } from "react";

import Modifyactivity from './Modifyactivity';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ActivityLine extends Component {
    constructor() {
        super();
        this.state = { trigger: false };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };
    add = () => {
        this.props.add(this.props.userdata.activityId);
    };

    handlePageChange= () => {
    this.setState({ trigger: true });

}

    render() {
        console.dir(this.props);
        let view;
        if (this.state.trigger) {
            view = <Modifyactivity data={this.props.userdata} id={this.props.id} editactivity={this.props.editactivity} />;

        } else {
            view = (
                <div>
                    <Form className="ActivityLine">
                        <FormGroup>
                            <input type="Liikkeen nimi" id="fak" className="activitylineformi[]" value={this.props.userdata.activityname} />
                            <label id="label">Painot/kg</label><input type="Painot/kg" label="Paino/kg" id="fak" className="activitylineformi[]" value={this.props.userdata.weight} />
                            <label id="label">Toistot</label><input type="Toistot" id="fak" className="activitylineformi[]" value={this.props.userdata.reps} />                       
                            <label id="label">Sarjat</label><input type="Sarjat" id="fak" className="activitylineformi[]" value={this.props.userdata.rounds} />
                            <label id="label">Lepo</label><input type="Lepo" id="fak" className="activitylineformi[]" value={this.props.userdata.rest} />
                            <label id="label">Kesto</label><input type="Kesto" id="fak" className="activitylineformi[]" value={this.props.userdata.duration} />
                            <button type="button" id="faknap" className="activitynappula[]"  onClick={this.add}>Lisää treeniin</button>
                            <button type="button" id="faknap" className="activitynappula[]" onClick={this.handlePageChange}>Päivitä</button>
                        </FormGroup>
                    </Form>                
                  </div>
            );
        }

                return (
                    <div>
                        {view}                                                       
                    </div>
                );

        }
    }

export default ActivityLine;
