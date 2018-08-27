import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import etsi from './Components/etsi.png';
import kalenteri from './Components/kalenteri.png';
import plus from './Components/plus.png';
import login from './Components/login.png';
import logout from './Components/logout.png';
import barbel from './Components/barbel.png';


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
                        <div className="naviloota">                         
                            <Navbar.Brand>
                                <a href="/profile" className="profiili" >Profiili</a>
                            </Navbar.Brand>
                      
                        <a href="/train">
                        <input          
                            type="image"
                            className="puntti"
                            src={barbel} 
                            onClick={this.goTo.bind(this, 'train')} 
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
                            
                        </div>    
                    </Navbar.Header>
                </Navbar>              
            </div>
        );
    }
}

export default App;
