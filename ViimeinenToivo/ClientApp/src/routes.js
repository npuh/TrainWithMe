import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Search from './Components/Search';
import Calendar from './Components/Calendar';
import Profile from './Components/Profile';
import Workout from './Components/Workout';
import Train from './Components/Train';
import Schedule from './Components/Schedule';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history} component={App}>
            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/profile" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/home"/>
) : (
                <Profile auth={auth} {...props} />
  )
              )} />
                <Route path="/workout" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/home" />
                    ) : (
                            <Workout auth={auth} {...props} />
                        )
                )} />
                
                <Route path="/train" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/home" />
                    ) : (
                            <Train auth={auth} {...props} />
                        )
                )} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />;
                }} />
                <Route path="/schedule" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/home" />
                    ) : (
                            <Schedule auth={auth} {...props} />
                        )
                )} />
            </div>
        </Router>
    );
};
