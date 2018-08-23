import React, { Component } from 'react';
import etsi from "./etsi.png";
class Search extends Component {
    render() {
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="Search" placeholder="Haku" aria-label="Haku"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Haku</button>
  </form>
            );
    }
}
export default Search;