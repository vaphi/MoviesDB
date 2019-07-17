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
<<<<<<< HEAD
=======
					{<Authentication token={this.state.token} /> }
>>>>>>> bf3e97a3938690a7b72367b181ee77bd8f2d08e9
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

<<<<<<< HEAD
=======
/*
				<Route path="/dashboard" component={DashboardPage}  />
				<Route exact path="/navbar" component={NavBar} />
*/
>>>>>>> bf3e97a3938690a7b72367b181ee77bd8f2d08e9

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

<<<<<<< HEAD
=======

>>>>>>> bf3e97a3938690a7b72367b181ee77bd8f2d08e9
export default App;