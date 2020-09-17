import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
    REACT_APP_ACCOUNTS_HOST: accountsHost,
    REACT_APP_HOUSES_HOST: housesHost,
} = process.env;

function Header() {
    return (
        <div className="banner">
            <h1 className="banner-title">🏦 Assets and Loans 🏦</h1>
            <h4>E-banking</h4>
        </div>
    );
}

function Accounts({ history }) {
    return <MicroFrontend history={history} host={accountsHost} name="Accounts" />;
}

function Houses({ history }) {
    return <MicroFrontend history={history} host={housesHost} name="Houses" />;
}

function GreetingRM({ history }) {
    return (
        <div>
            <Header />
            <div className="home">
                <MicroFrontend history={history} host={housesHost} name="Houses" />
            </div>
        </div>
    );
}

function Home({ history }) {
    const [input, setInput] = useState("");

    const handleOnClick = () => {
        history.push(`/rm/${input}`);
    };

    return (
        <div>
            <Header />
            <div className="home">
                <input
                    placeholder="Enter Your Nickname"
                    defaultValue={input}
                    onBlur={(e) => setInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Click Here</button>
            </div>

            <div className="home">
                <div className="content">
                    <div className="cat">
                        <Houses />
                    </div>
                    <div className="dog">
                        <Accounts />
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/rm/:greeting" component={GreetingRM} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}
export default App;