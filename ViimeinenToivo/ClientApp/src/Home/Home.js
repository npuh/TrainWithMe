import React, { Component } from 'react';
import User from '../Components/User';

class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                {
                    isAuthenticated() && (
                        <h4>
                           
              </h4>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                           Et ole kirjautunut sisään!{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                </a>
                            {' '}jatkaaksesi.
              </h4>
                    )
                }
                <User/>
            </div>
        );
    }
}

export default Home;
