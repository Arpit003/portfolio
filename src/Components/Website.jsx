// CORE
import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

// USER DEFINED
import Routes from "Routes/Route";
import TopBar from "./Commons/Topbar/Topbar";
import { ContentWrapper } from "./Website.style";
import { URL_ABOUT } from 'Helpers/Paths';


class Website extends Component {


	render() {
		let path = this.props.location.pathname;

		return (
			<React.Fragment>
				<TopBar />
				<ContentWrapper minHeight={path === URL_ABOUT && "850px"}>
					<Routes />
				</ContentWrapper>
			</React.Fragment>
		);
	}
}


// const mapReduxStateToProps = (state) => ({
// 	isLoggedIn: state.Auth.isLoggedIn,
// })

// export default connect(mapReduxStateToProps)(Website);

export default withRouter(Website);