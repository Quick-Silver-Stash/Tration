import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Landing from "../../screens/Landing/Landing";
import Login from "../../screens/Login/Login";
import Logout from "../../screens/Logout";
import useUser from "../../_hooks/useUser";

export default function CustomRouter() {
    const { isLoggedIn, loaded } = useUser();
    return(
        <Router>
            {!loaded? null : isLoggedIn() ? (
                <Switch>
                    <Route path="/logout">
                        <Logout/>
                    </Route>
                    <Route path="/login">
                        <Redirect to="/user"></Redirect>                        
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/logout">
                        <Redirect to="/login"></Redirect>
                    </Route>
                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>
            )}
        </Router>
    );
}