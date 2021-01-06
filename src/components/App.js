import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import MyList from './MyList';
import Page404 from "./Page404";

const App = () => {


    return (
        <div className="App">
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={MyList} path="/list" />
                <Route component={Page404} />
            </Switch>
        </div>
    )


}

export default App