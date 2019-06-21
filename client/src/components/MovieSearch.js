import React, {Component} from 'react';

import '../Misc/css/MoviesSearch.css';
class MovieSearch extends Component {

	viewMovie() {
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
		window.location.href = url
	}

	render() {
		return( 
			<div class="col-sm-4 " key={this.props.movie.id}>
			<img alt="poster" src= {this.props.movie.poster_src}/>
			<h4>{this.props.movie.title}</h4>
			<p>{this.props.movie.overview}</p>
			<input type="button" value="view" onClick={this.viewMovie.bind(this)}/>
			</div> 
		)
	}
}

	export default MovieSearch