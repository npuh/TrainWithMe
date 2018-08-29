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

    handlePageChange= () => {
    this.setState({ trigger: true });

}

    render() {
        let view;
        if (this.state.trigger) {
            view = <Modifyactivity data={this.props.userdata} id={this.props.id} editactivity={this.props.editactivity}/>

        } else {
            view = (
                <tbody>
                <tr className="ActivityLine">

                    <td>&nbsp;</td>
                    <button type="button" onClick={this.remove}>Poista</button>
                    <td>&nbsp;</td>
                    <button type="button" onClick={this.handlePageChange}>Päivitä</button>
                    <td>{this.props.userdata.activityname}</td>


                    </tr>
                    </tbody>
            );
        }

                return (
                    <div>

                        {view}

                        <Form className="ActivityLine">
                            <FormGroup>
                                <input type="text" className="activitylineformi" value={this.props.userdata.activityname} />
                                <button type="button" onClick={this.remove}>Poista</button>
                            </FormGroup>
                                  </Form>
                                                    

                    </div>
                );

        }
    }

export default ActivityLine;
