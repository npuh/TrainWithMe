import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Calendar from "./Components/Calendar";
import User from './Components/User';
import Stopwatch from './Components/Stopwatch';
import etsi from './Components/etsi.png';
import kalenteri from './Components/kalenteri.png';
import plus from './Components/plus.png';
import login from './Components/login.png';
import logout from './Components/logout.png';


class App extends React.Component {
    get displayName() {
        return 'React.Component';
    }
    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (

            <div className="navbar">
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/profile">Profiili</a>
                        </Navbar.Brand>
                        <a href="/search">
                        <input          
                            type="image"
                            className="etsinappula"
                            src={etsi} 
                            //bsStyle="primary"
                        //className="btn-margin"
                            onClick={this.goTo.bind(this, 'search')} 
                         />
                         </a>
                        <a href="/calendar">
                        <input
                            type="image"
                            className="kalenteri"
                            src={kalenteri}
                            onClick={this.goTo.bind(this, 'calendar')}
                         />
                        </a>
                        <a href="/workout">
                        <input
                            type="image"
                            className="plussa"
                            src={plus}
                            onClick={this.goTo.bind(this, 'workout')}
                        />
                        </a>
                        {
                            !isAuthenticated() && (
                                <input
                                    type="image"
                                    className="userkuvalogin"
                                    src={login}
                                    onClick={this.login.bind(this)}
                                />
                            )
                        }
                        {
                            isAuthenticated() && (
                                <input
                                    type="image"
                                    className="userkuvalogout"
                                    src={logout}
                                    onClick={this.logout.bind(this)}
                                    /> 
              
                            )
                        }
                    </Navbar.Header>
                </Navbar>
               

            </div>
        );
    }
}

export default App;
