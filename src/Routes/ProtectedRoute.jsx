import React, { Fragment } from 'react'
import { connect } from 'react-redux';

function ProtectedRoute(props) {
	const { children } = props
	return (
		<div>
			{
				<Fragment>
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