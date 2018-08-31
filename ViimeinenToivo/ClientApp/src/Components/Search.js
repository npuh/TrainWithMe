//import React, { Component } from "react";
//import ActivitiesList from './ActivitiesList';
//import Loader from './Loader';
//import Profile from './Profile';


//class Search extends Component {
//    constructor() {
//        super();
//        this.state = {
//            userdata: []
//        };
//    }
  
//};

//componentWillMount() {
//    this.getUserData();
//}

//componentDidMount() {
//    this.getUserData();
//}

//getUserData() {
//    $.ajax({
//        url: apiurl,
//        dataType: "json",
//        cache: false,
//        success: function (data) {
//            this.setState({ userdata: data }, function () {
//            });
//        }.bind(this),
//        error: function (xhr, status, err) {
//        }
//    });
//}

//modifyActivity(activity, id) {
//       console.log(activity);
//       console.dir(activity.Activityname);
//       return fetch("api/Activities/" + id, {
//            method: "PUT",
//            headers: { "Content-Type": "application/json" },
//            body: JSON.stringify(activity)
//        }).then(function (response) {
//            console.log(response.status);
//            callback(response.status);
//        });
//    }
//    render() {
        
//        return (
//            <div>
               
//            </div>
//        );
//    }
//}

//export default Search;
