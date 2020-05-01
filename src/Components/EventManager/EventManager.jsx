// CORE
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toast from 'Components/Commons/Toast/Toast'

import { hideToast } from "Redux/General/Actions";

class EventManager extends Component {

	render() {
		return (
			<React.Fragment>
                <Toast 
                    open        = {this.props.toast.enable}
                    message     = {this.props.toast.message}
                    handleClose = {this.props.hideToast}
                />
			</React.Fragment>
		);
    }
}

const mapReduxStateToProps = state => {
    return {
        toast   : state.General.toast,
    }
}

export default connect(mapReduxStateToProps, {
    hideToast
})(EventManager);
