import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { URL_LOGIN } from "Helpers/Paths";

function ProtectedRoute(props) {
	const { isLoggedIn, children } = props
	return (
		<div>
			{
				!isLoggedIn ?
					<Redirect to={URL_LOGIN} />
					: <Fragment>
						{children}
					</Fragment>
			}
		</div>
	)
}

const mapReduxStateToProps = (state) => ({
	isLoggedIn: state.Auth.isLoggedIn,
})

export default connect(mapReduxStateToProps, null)(ProtectedRoute);