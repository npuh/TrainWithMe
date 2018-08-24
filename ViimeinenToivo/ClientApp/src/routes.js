import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import User from './Components/User';
import Search from './Components/Search';
import Calendar from './Components/Calendar';
import Workout from './Components/Workout';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/workout" render={(props) => <Workout auth={auth} {...props} />} />
                <Route path="/calendar" render={(props) => <Calendar auth={auth} {...props} />} />
                <Route path="/search" render={(props) => <Search auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />;
                }} />
            </div>
        </Router>
    );
};
