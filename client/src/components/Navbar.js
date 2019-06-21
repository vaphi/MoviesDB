import React, {Component} from 'react';

import Micon from '../Misc/images/movieDBicon.png'
import '../Misc/css/NavBar.css'

class MovieSearch extends Component {
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
			   <input className="search-bar" placeholder="Please enter movie name"/> 
    		</div>
  				</div>
			</div>
		)
	}
}

export default MovieSearch;