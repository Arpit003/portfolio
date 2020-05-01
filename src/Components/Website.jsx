// CORE
import React, { Component } from 'react';
// import { connect } from 'react-redux';

// USER DEFINED
import Routes from "Routes/Route";
import TopBar from "./Commons/Topbar/Topbar";
import EventManager from "./EventManager/EventManager";
import { ContentWrapper } from "./Website.style";


class Website extends Component {

	render() {
		return (
			<React.Fragment>
				<TopBar />
				<ContentWrapper>
					<Routes />
				</ContentWrapper>

				<EventManager />
			</React.Fragment>
		);
	}
}


// const mapReduxStateToProps = (state) => ({
// 	isLoggedIn: state.Auth.isLoggedIn,
// })
  
// export default connect(mapReduxStateToProps)(Website);

export default Website;