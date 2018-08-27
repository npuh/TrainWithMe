import React, { Component } from "react";
import ActivitiesList from './ActivitiesList';
import Loader from './Loader';
import Profile from './Profile';


class Search extends Component {

    state = {
        activities: [],
        activityName: "",
        isFetching: false
    };

    onActivitiesInputChange = e => {
        this.setState({ activityName: e.target.value, isFetching: true });

        fetch(`http://localhost:3000/api/activities?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ activities: json, isFetching: false }));
    };
    
    render() {
        const { activities, activityName, isFetching } = this.state;
        return (
            <div>
                <input
                    value={activityName}
                    type="text"
                    onChange={this.onActivitiesInputChange}
                />
                <div />
                {!isFetching &&
                    activities.length === 0 &&
                    activityName.trim() === "" && (
                        <p>Kirjoita liikkeen nimi</p>
                    )}
                {!isFetching &&
                    activities.length === 0 &&
                    activityName.trim() !== "" && (
                        <p>Liikettä ei löydy</p>
                    )}
                {isFetching && <Loader />}
                {!isFetching && <ActivitiesList list={this.state.activities} />}
            </div>
        );
    }
}

export default Search;
