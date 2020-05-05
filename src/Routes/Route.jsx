import React from 'react';
import { Switch, Route } from "react-router-dom";

// ROUTING COMPONENTS
import RoutesList from "./RoutesList";

function Routes() {
    return (
        <Switch>
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
        </Switch>
    );
}

export default Routes;
