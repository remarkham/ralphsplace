
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import EyeCandy from "./components/EyeCandy";
import GithubCards from "./components/GithubCards";
import Shop from "./components/Shop";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/eyeCandy" component={EyeCandy} />
                    <Route path="/githubCards" component={GithubCards} />
                    <Route path="/shop" component={Shop} />
                </Switch>

            </div>
        </Router>
    );
};

export default App;
