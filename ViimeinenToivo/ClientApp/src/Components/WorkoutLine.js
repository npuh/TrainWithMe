import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class WorkoutLine extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.workoutId);
    };

    render() {
                return (
                    <div>
                        <ListGroup>
                            <ListGroupItem className="listaitemi"><button type="button" className="nappi" size="lg" onClick={this.moveto}>Siirry treeniin</button><b className="nimi">{this.props.userdata.workoutname}</b></ListGroupItem>                     
                        </ListGroup>               
                    </div>
                );

        }
    }

export default WorkoutLine;
