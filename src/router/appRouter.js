import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/loginPage';
import MainPage from '../components/mainPage';
import StatisticsPage from '../components/StatisticsPage';
import ChangePassword from '../components/ChangePassword';
import { store } from '../store/configureStore';
import { getData } from '../actions/fullData';


export const history = createHistory();
store.dispatch(getData());

class AppRouter extends React.Component {
    render(){
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route path='/' component={LoginPage} exact={true}/>
                        <Route path='/dashboard' component={MainPage} exact={true}/>
                        <Route path='/stats' component={StatisticsPage} exact={true} />
                        <Route path='/changePwd' component={ChangePassword} exact={true} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRouter;