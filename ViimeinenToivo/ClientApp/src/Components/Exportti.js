import React, { Component } from "react";
import ReactExport from 'react-data-export';
import $ from "jquery";
import ActivitiesList from "./ActivitiesList";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const apiurl = "api/Activities";

class Exportti extends Component {
    constructor(props) {
        super(props);
        this.state = {
         userdata: []
        };
    }

    componentWillMount() {
        this.getUserData();
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        $.ajax({
            url: apiurl,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ userdata: data }, function () {
                });
            }.bind(this),
            error: function (xhr, status, err) {
            }
        });
    }
    render() {
        const userdata = this.state.userdata; 
        return (
            <ExcelFile element={<button onClick={this.getUserData} className="excelbutton">Excel</ button>} >
                <ExcelSheet data={userdata} name="Liikkeet">
                    <ExcelColumn label="Liikkeen nimi" value="activityname" />
                    <ExcelColumn label="Paino/kg" value="weight" />
                    <ExcelColumn label="Toistot" value="reps" />
                    <ExcelColumn label="Sarjat" value="rounds" />
                    <ExcelColumn label="Lepo" value="rest" />
                    <ExcelColumn label="Duration" value="kesto" />
                </ExcelSheet>
           </ExcelFile >
        );
    }
}

export default Exportti;