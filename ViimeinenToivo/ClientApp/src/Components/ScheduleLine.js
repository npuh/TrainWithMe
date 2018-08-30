import React, { Component } from "react";

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
            <div>
                <tr className="WorkoutLine">

                    <td>{this.state.day}.{this.state.month}.{this.state.year}</td>
                    <td>&nbsp;</td>
                    <td>{this.state.time}</td>
                    <td>&nbsp;</td>
                    <button type="button" onClick={this.moveto}>Siirry workoutiin</button>
                </tr>
            </div>
        );

    }
}

export default ScheduleLine;
