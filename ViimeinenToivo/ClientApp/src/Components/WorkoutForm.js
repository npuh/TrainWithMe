import React, { Component } from "react";
import checkbox from './checkbox.png';
import "./Style.css";

const apiurl = "api/Activities";

class WorkoutForm extends Component {

        state = {Workoutname: "" };
  
    WorkoutSave = e => {
        this.setState({ Workoutname: e.target.value });
    };
    laheta = e => {
        e.preventDefault();
        this.props.saveWorkout(this.state);
        this.setState({ Workoutname: ""});
    };

    render() {
        return (
            <div align="center">
                <form onSubmit={this.laheta}>
                    <h1>Add new workout</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Workoutname</td>
                                <td>
                                    <input className="form-control" value={this.state.Workoutname} onChange={this.WorkoutSave} />
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
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

export default WorkoutForm;
