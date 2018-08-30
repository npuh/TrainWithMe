import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

class WorkoutLine extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        console.log("Workoutline: moveto functio");
        this.props.moveto(this.props.userdata.workoutId);
    };

    render() {
                return (
                    <div>
                        <ListGroup>
                            <ListGroupItem className="listaitemi"><button type="button" size="lg" onClick={this.moveto}>Siirry</button><p className="nimi">{this.props.userdata.workoutname}</p></ListGroupItem>                                        
                        </ListGroup>
                    </div>
                );
        }
    }

export default WorkoutLine;
