import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


class ScheduleLine extends Component {
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.workoutId);
    };

    render() {
        return (
            <div className="WorkoutLine">
              
                <ListGroup>
                    <ListGroupItem className="listaitemi2">  <button type="button" onClick={this.remove}>Poista</button><button type="button" onClick={this.moveto}>Siirry</button><p className="nimi">{this.props.userdata.date}</p></ListGroupItem>
                    </ListGroup>                
            </div>
        );

    }
}

export default ScheduleLine;
