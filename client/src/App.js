import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import TodoPage from "./Routes/TodoPage";

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Todo" component={TodoPage} />
            </Switch>
        </Router>
    )
}

export default App;