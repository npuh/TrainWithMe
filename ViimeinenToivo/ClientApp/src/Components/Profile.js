// src/Profile/Profile.js

import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import $ from "jquery";
import './Style.css';

class Profile extends Component {


    componentWillMount() {
        this.setState({ profile: {}, metadata: 0 });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }

    }
    getUserMetadata = (profile) => {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tatuntesti.eu.auth0.com/api/v2/users/" + profile.profile.sub,
            "method": "GET",
            "headers": {
                "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56VXhSRUUxTVRVeU9FUkNPRFV3UWtKQlEwVXdOemt3UWpKQk1rWTBNVEE1UWtRMVJERkZSZyJ9.eyJpc3MiOiJodHRwczovL3RhdHVudGVzdGkuZXUuYXV0aDAuY29tLyIsInN1YiI6IkZESGRnRkdKOHVXbzFqbFRvNHhaMW94d21HN0pWNzNyQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3RhdHVudGVzdGkuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MzUzNTIxNDksImV4cCI6MTUzNTc4NDE0OSwiYXpwIjoiRkRIZGdGR0o4dVdvMWpsVG80eFoxb3h3bUc3SlY3M3IiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.etk4JMRk7nEWI9_myirko1ntB3VyzYRI_Tn443NH0_KNxZ1hJLhwcTtZmjG3K0dxN0RREL15Rxi7YIK9ZvUpVQ7yV0CdK76Vu3mFCHPo2zPsEuq4VC6Kk13_d8ex7aKR2DNzC7I1p0OeVlM4bldxlU2x4jIS53EecJe4WNgRkVo9TuNvrsdfzVhZulPNFp1SijAsMdZAQNQMLs5hUMnRqjBDUFY1mqw5JT0-79-BeLZKNCOa38VXCoUO_hrBslAp665sgH9lTi8ug9DOH0E6jNyGGQvFAk7SdfiVHmgniqT-0wO47nsNNPc1gmem2B3RuQjjQgSiULvGyDgZLisVxA",
                "content-type": "application/json"
            }
        };

        $.ajax(settings).done(function (response) {
            this.setState({ metadata: response.user_metadata.id_user });
        }.bind(this));
    }

    render() {
        this.getUserMetadata(this.state);
        const { profile } = this.state;
        return (
            <div className="container">
                <div className="profile-area">
                    <h1 className="h1">Omat tiedot</h1>
                    <Panel className="profiilipaneeli" >
                        <div>
                    <img className="profiilikuva" src={profile.picture} alt="profile" />
                            <table className= "profiilitaulukko">
                                <tr>
                                    <td>Id-numero:</td><td>&nbsp;</td><td>{this.state.metadata}</td>
                                </tr>
                                <tr>
                                    <td>Nimi:</td><td>&nbsp;</td><td>{profile.name}</td>
                                </tr>
                                <tr>
                                    <td>Käyttäjätunnus:</td><td>&nbsp;</td><td>{profile.nickname}</td>
                                </tr>
                            </table>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default Profile;