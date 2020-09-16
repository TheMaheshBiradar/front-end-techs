import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingToRelationShip from "./GreetingRelationShipManager";
import RandomHouse from "./RandomHouse";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
    return (
        <Router history={history}>
            <Route exact path="/" component={RandomHouse} />
            <Route exact path="/rm/:greeting" component={GreetingToRelationShip} />
        </Router>
    );
}

export default App;