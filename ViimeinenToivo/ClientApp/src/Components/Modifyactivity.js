import React, { Component } from "react";
import checkbox from './checkbox.png';

//tämä on se joka toimii!!!

class Modifyactivity extends Component {
    constructor(props) {
        super(props);
        
        console.log("ModifyActivity.constructor props", props);
        this.state = {
            Activityname: props.data.activityname,
            Weight: props.data.weight,
            Reps: props.data.reps,
            Rounds: props.data.rounds,
            Rest: props.data.rest,
            Duration: props.data.duration
        };

    }

    activitynameChanged = (e) => { this.setState({ Activityname: e.target.value }); }
    weightChanged = (e) => { this.setState({ Weight: e.target.value }); }
    repsChanged = (e) => { this.setState({ Reps: e.target.value }); }
    roundsChanged = (e) => { this.setState({ Rounds: e.target.value }); }
    restChanged = (e) => { this.setState({ Rest: e.target.value }); }
    durationChanged = (e) => { this.setState({ Duration: e.target.value }); }

    paivita = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log("ModifyActivity propsit", this.props);
        this.props.editactivity(this.state, this.props.id);
        this.props.reportmodified(this.state.Activityname);
        this.setState({ Activityname:"", Weight: "", Reps: "", Rounds: "", Rest: "", Duration: "" });
    };

   

    render() {
        console.log("ModifyActivity.render props", this.props);
        
        return (
            

<div align="center">
                <form onSubmit={this.paivita}>
                    <h1 className="h1">Päivitä liikettä</h1>

        <table>
            <tbody>
                <tr>
                    <td>Liikkeen nimi</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.activityname} onChange={this.activitynameChanged} />
                    </td>
                </tr>
                <tr>
                    <td>Painot/kg</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.weight} onChange={this.weightChanged} />
                    </td>
                </tr>
                <tr>
                    <td>Toistot</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.reps} onChange={this.repsChanged} />
                    </td>
                </tr>
                <tr>
                    <td>Sarjat</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.rounds} onChange={this.roundsChanged} />
                    </td>
                </tr>
                <tr>
                    <td>Lepo</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.rest} onChange={this.restChanged} />
                    </td>
                </tr>
                <tr>
                    <td>Kesto</td>
                    <td>
                        <input className="form-control" defaultValue={this.props.data.duration} onChange={this.durationChanged} />
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


export default Modifyactivity;