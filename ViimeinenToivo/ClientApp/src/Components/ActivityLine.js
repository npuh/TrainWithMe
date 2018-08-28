import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ActivityLine extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.activityId);
    };

    render() {
                return (
                    <div>
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
