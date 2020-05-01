import React from 'react';
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Login from "Components/Pages/Login/Login";

// ROUTING COMPONENTS
import ProtectedRoute from "./ProtectedRoute";
import RoutesList from "./RoutesList";
import { URL_LOGIN } from "Helpers/Paths";

function Routes() {
    return (
        <Switch>
            <Route path={URL_LOGIN} component={Login} />
            <ProtectedRoute>
                {
                    RoutesList.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))
                }
            </ProtectedRoute>
        </Switch>
    );
}

export default Routes;
