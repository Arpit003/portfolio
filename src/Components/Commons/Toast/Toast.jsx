import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';

import { SnackbarContentWrapper } from "./Toast.style";

// IMAGES
// import CloseIcon from '@material-ui/icons/Close';
function Toast(props) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical    : 'top',
                horizontal  : 'right',
            }}
            autoHideDuration  = {props.duration || 3000}
            open      = {props.open}
            onClose   = {props.handleClose}
        >
            <SnackbarContentWrapper
                className={"themed"}
                aria-describedby="client-snackbar"
                classes = {{
                    message   : "notification-message",
                }}
                message = {
                    <React.Fragment>
                        {props.message}
                    </React.Fragment>
                }
               /*  action={[
                    <IconButton
                        key           = "close"
                        aria-label    = "Close"
                        color         = "inherit"
                        className     = "close-icon"
                        onClick       = {props.handleClose}
                    >
                        <CloseIcon  />
                    </IconButton>,
                ]} */
            />
        </Snackbar>
    )
}

export default Toast;