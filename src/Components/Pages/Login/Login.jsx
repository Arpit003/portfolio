import React from "react";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { URL_DASHBOARD } from "Helpers/Paths";

class Login extends React.Component {

    componentDidMount(){
        this.checkIfAlreadyLoggedIn();
    }

    checkIfAlreadyLoggedIn() {
        if(this.props.isLoggedIn) 
            this.props.history.push(URL_DASHBOARD)
    }

    render() {
        return (
            <Typography variant="h6" >
                Login
            </Typography>
        )
    }
}

const mapReduxStateToProps = (state) => ({
    isLoggedIn: state.Auth.isLoggedIn,
})

export default connect(mapReduxStateToProps)(withRouter(Login));
