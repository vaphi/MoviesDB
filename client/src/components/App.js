import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import Authentication from '../components/Authentication'
import Auth from '../utils/auth';
import SignUpPage from '../pages/SignUpPage';
import MovieSearch from '../pages/MoviesSearch';
import NavBar from '../components/Navbar'

class App extends Component {
	state = {
		token: Auth.getToken()
	}

	componentDidMount() {
		Auth.onAuthChange(this.handleAuthChange);	
	}

	handleAuthChange = token => {
		this.setState({
			token
		});
	}
	render() {
		return(
		<BrowserRouter>
			<div>
				<header>
					{<Authentication token={this.state.token} /> }
					<NavBar/>
				</header>
				<Route exact path="/" render={() => <LoginPage token={this.state.token}/>} />
				<Route exact path="/signup" render={() => <SignUpPage token={this.state.token} />} />
				<PrivateRoute path="/movieSearch" component={MovieSearch} token={this.state.token} />
			</div>
		</BrowserRouter>
		)
	}
}

/*
				<Route path="/dashboard" component={DashboardPage}  />
				<Route exact path="/navbar" component={NavBar} />
*/

const PrivateRoute = ({ component: Component, token, ...rest }) => (
	<Route {...rest} render={props => (
		token ? (
			<Component {...props} token={token} />
		) : (
			<Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default App;