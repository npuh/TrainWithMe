import React, { Component } from "react";
import ScheduleLine from "./ScheduleLine";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ScheduleList extends Component {
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
    };
    remove = () => {
        this.props.remove(this.props.userdata.workoutId);
    };
    moveto = () => {
        this.props.moveto(this.props.userdata.workoutId);
    };
    render() {
        let userdataItems;
        if (this.props.userdata) {
            userdataItems = this.props.userdata.map(userdata => {
                return (
                    <div className="Schedules">
                        <table align="center">
                            {userdataItems}</table>
                        <ScheduleLine
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
                    <h1 className="h1">Treeniajat</h1>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>{userdataItems}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default ScheduleList;
