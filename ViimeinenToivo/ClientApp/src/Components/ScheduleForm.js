import React, { Component } from "react";
import checkbox from './checkbox.png';
import "./Style.css";
import './ActivityForm.css';


class ScheduleForm extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("ScheduleForm statit props", props);
        console.log("ScheduleForm statit state", state);
        if (props.workoutId === state.workoutId) {
            return null;
        }
        return { workoutId: props.workoutId };
    }
    constructor(props) {
        super(props);
        this.state = { UserId: "", Date: "", workoutId: "" };
    }

    UserIdSave = e => {
        this.setState({ UserId: e.target.value });
    };

    DateSave = e => {
        this.setState({ Date: e.target.value });
    };

    WorkoutIdSave = e => {
        this.setState({ workoutId: e.target.value });
    };

    laheta = e => {
        e.preventDefault();
        this.props.saveSchedule(this.state);
        this.setState({ UserId: "", Date: "", workoutId: "" });
    };


    render() {
        return (
            <div align="center">
                <form onSubmit={this.laheta}>
                    <h1 className="h1">Lisää uusi aikataulu</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input className="form-control" value={this.state.UserId} onChange={this.UserIdSave} placeholder="Käyttäjätunnus" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-control" value={this.state.Date} onChange={this.DateSave} placeholder="Päivämäärä ja aika" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-control" value={this.state.workoutId} onChange={this.WorkoutIdSave} placeholder="Treenin id" />
                                </td>
                            </tr>
                            <tr>

                                <td >
                                    <input className="Checkbox" type="image" src={checkbox} alt="Lisää" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default ScheduleForm;
