import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


class ScheduleLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: this.modifyDayString(this.props.userdata.date),
            month: this.modifyMonthString(this.props.userdata.date),
            year: this.modifyYearString(this.props.userdata.date),
            time: this.modifyTimeString(this.props.userdata.date)
        };
    }

    modifyYearString = (value) => {
        return JSON.stringify(value).slice(1, 5);

    }

    modifyMonthString = (value) => {
        return JSON.stringify(value).slice(6, 8);

    }

    modifyDayString = (value) => {
        return JSON.stringify(value).slice(9, 11);

    }

    modifyTimeString = (value) => {
        return JSON.stringify(value).slice(12, -1);

    }

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
                        <ListGroupItem className="listaitemi2">
                            <button type="button" onClick={this.moveto}>Siirry</button>
                            {this.state.day}.{this.state.month}.{this.state.year} {this.state.time}
                        </ListGroupItem>
                    </ListGroup>
                </div>
                );
        
            }
        }
        
        export default ScheduleLine;
