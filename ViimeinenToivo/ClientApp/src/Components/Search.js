import React, { Component } from "react";
import ActivitiesList from './ActivitiesList';

class Search extends Component {
    
    render() {
        return (
            <div className="haku">
                <ActivitiesList/>      
            </div>
        );
    }
}

export default Search;
