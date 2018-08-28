import React, { Component } from 'react';
import twmlogo from '../Components/twmlogo.png';

class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                <img src={twmlogo} alt="logo" className="logo" />
                {
                    isAuthenticated() && <h4>Olet kirjautunut sisään!</h4>
                }
                {
                    !isAuthenticated() && <h4>Et ole kirjautunut sisään! Klikkaa{' '}
                            <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}> Log In </a> {' '}jatkaaksesi.
              </h4>}
            </div>
        );
    }
}

export default Home;
