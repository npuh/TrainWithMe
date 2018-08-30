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
                            <input type="Painot/kg"  id="fak" className="activitylineformi[]" value={this.props.userdata.weight} />
                            <input type="Toistot" id="fak" className="activitylineformi[]" value={this.props.userdata.reps} />
                            <input type="Sarjat" id="fak" className="activitylineformi[]" value={this.props.userdata.rounds} />
                            <input type="Lepo" id="fak" className="activitylineformi[]" value={this.props.userdata.rest} />
                            <input type="Kesto" id="fak" className="activitylineformi[]" value={this.props.userdata.duration} />
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
