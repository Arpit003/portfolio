import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { URL_DASHBOARD, URL_USER } from "Helpers/Paths";
import { ToolbarWrapper, LinksWrapper } from "./Topbar.style";


function Topbar(props) {
    function navigateTo(url){
        props.history.push(url)
    }

    return (
        <AppBar position="static">
            <ToolbarWrapper>
                <Typography variant="h6" >
                    OpenXcell
                </Typography>

                <LinksWrapper>
                    <Button color="inherit" onClick={() => navigateTo(URL_DASHBOARD)}>Dashboard</Button>
                    <Button color="inherit" onClick={() => navigateTo(URL_USER)}>User</Button>
                </LinksWrapper>
            </ToolbarWrapper>
        </AppBar>
    );
}

export default withRouter(Topbar);