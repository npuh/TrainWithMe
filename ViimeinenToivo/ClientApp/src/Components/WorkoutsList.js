import React, { Component } from "react";
import WorkoutLine from "./WorkoutLine";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class WorkoutsList extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    remove = () => {
        this.props.remove(this.props.userdata.WorkoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.WorkoutId);
    };
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Workouts">
                        <table align="center">
                            {userdataItems}</table>
                        <WorkoutLine
                            userdata={userdata}
                            remove={this.props.remove}
                            moveto={this.props.moveto}
                            key={userdata.workoutId}
                        />
                        </div>
                );
            });
        }
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className="alasvetovalikko">
                    <h1 className="h1">Treenilista</h1>
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>{userdataItems}</DropdownItem>          
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default WorkoutsList;
