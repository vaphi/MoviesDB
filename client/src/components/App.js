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
					<NavBar/>
				</header>
				<Route exact path="/" component={MovieSearch} />
				<Route exact path="/signup" component={SignUpPage} />
				<Route exact path="/navbar" component={NavBar} />
				<Route exact path="/login" render={() => <LoginPage />} />
				<Route path="/dashboard" component={DashboardPage}  />
			</div>
		</BrowserRouter>
		)
	}
}


const PrivateRoute = ({ component: Component, token, ...rest }) => (
	<Route {...rest} render={props => (
		token ? (
			<Component {...props} token={token} />
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default App;