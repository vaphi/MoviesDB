import React, {Component} from 'react';
import Micon from '../Misc/images/movieDBicon.png'
import '../Misc/css/NavBar.css'
import Authentication from '../components/Authentication'
import Auth from '../utils/auth';

class MovieSearch extends Component {
	state = {
		token: Auth.getToken()
	}

render() {
return(
	<div class="nav-container">			
  		<div class="row">
    		<div class="col-sm">
			<img alt="nav icon"  width="150px" src={Micon}/>
    		</div>
    		<div class="col-md-center">
      			<h1>MovieDB</h1>
    		</div>
   			<div class="col-sm">
    			</div>
				{<Authentication token={this.state.token} /> }
  				</div>
			</div>
		)
	}
}

export default MovieSearch;