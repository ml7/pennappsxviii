import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../components/MainPage.js';

export default class App extends Component {
    render () {
        return (
          <Switch>
            <Route path='/' exact component={MainPage}/>
          </Switch>
        )
    }
}
